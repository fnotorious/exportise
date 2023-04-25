import  React, { useEffect, useState } from 'react'
import { debounce } from 'lodash'
import styles from './info-page.module.css'

import { Section } from '../section/section'
import { Navbar } from '../navbar/navbar'
import { codes } from './codes'

const InfoPage = React.memo((props) => {
  const [showLoading, setShowLoading] = useState(false);
  const [chartLoading, setChartLoading] = useState(false);
  const [chartLoading2, setChartLoading2] = useState(false);
  const [timeLoading, setTimeLoading] = useState(false);
  const [timeLoading2, setTimeLoading2] = useState(false);
  const [chartData1, setChartData1] = useState(null);
  const [chartData2, setChartData2] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [prevSelection, setPrevSelection] = useState([props.countryOne, props.countryTwo]);
  const [selectionChange, setSelectionChange] = useState(true);
  const [showError, setShowError] = useState(false);
  const [showError2, setShowError2] = useState(false);
  const [cooldownMsg, setCooldownMsg] = useState(false);

  const [sendReq, setSendReq] = useState(true);
  const [changeFlag1, setChangeFlag1] = useState(true);
  const [changeFlag2, setChangeFlag2] = useState(true);
  const [firstRun, setFirstRun] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState(null);

  const [year1, setYear1] = useState(2020);
  const [year2, setYear2] = useState(2020);

  const [importsMode, setImportsMode] = useState(false);
  const [importsMode2, setImportsMode2] = useState(false);

  const [countryMode, setCountryMode] = useState(false);
  const [countryMode2, setCountryMode2] = useState(false);

  const setCooldown = () => {
    setCooldownMsg(true);
    setTimeout(() => {
      setCooldownMsg(false);
    }, 1500);
  }

  const setNewYear = (newYear, countryNum) => {
    if (countryNum === 0) {
      setYear1(newYear);
      setTimeLoading(true);
      setChangeFlag1(true);
    }

    else {
      setYear2(newYear);
      setTimeLoading2(true);
      setChangeFlag2(true);
    }

    setSendReq(true);
  }

  const setByCountry = (countryNum) => {
    if (countryNum === 0 && !sendReq) {
      setCountryMode((prevValue) => !prevValue);
      setChartLoading(true);
      setChangeFlag1(true);
    }

    else if (countryNum === 1 && !sendReq) {
      setCountryMode2((prevValue) => !prevValue);
      setChartLoading2(true);
      setChangeFlag2(true);
    }

    if (sendReq) {
      setCooldown();
    }

    setSendReq(true);
  }

  const setByImports = (countryNum) => {
    if (countryNum === 0 && !sendReq) {
      setImportsMode((prevValue) => !prevValue);
      setChartLoading(true);
      setChangeFlag1(true);
    }

    else if (countryNum === 1 && !sendReq) {
      setImportsMode2((prevValue) => !prevValue);
      setChartLoading2(true);
      setChangeFlag2(true);
    }

    if (sendReq) {
      setCooldown();
    }

    setSendReq(true);
  }

  useEffect(() => {
    if (firstRun || (prevSelection[0] !== props.countryOne || prevSelection[1] !== props.countryTwo)) {
      setSelectionChange(false);
      setPrevSelection([props.countryOne, props.countryTwo]);
      setDataLoaded(false);
    }
  }, [prevSelection, props.countryOne, props.countryTwo, firstRun]);

  useEffect(() => {
    if (selectionChange === false) {
      setShowLoading(true);  
      setChartLoading(true);
      setChartLoading2(true);
      setSendReq(true);
      setChangeFlag1(true);
      setChangeFlag2(true);
      setYear1(2020);
      setYear2(2020);
      const timer = setTimeout(() => {
        setSelectionChange(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [selectionChange]);

  useEffect(() => {
      window.addEventListener("online", () => setIsOnline(true));
      window.addEventListener("offline", () => setIsOnline(false));

      return () => {
      window.removeEventListener("online", () => setIsOnline(true));
      window.removeEventListener("offline", () => setIsOnline(false));
      };
  }, []);

  const fetchCountries = async () => {
    try {
      const country1 = await fetch(`https://restcountries.com/v3.1/alpha/${props.countryOne}`).then((res) => res.json());
      const country2 = await fetch(`https://restcountries.com/v3.1/alpha/${props.countryTwo}`).then((res) => res.json());
      setDataLoaded(true);
      setShowLoading(false);
      setData([country1[0], country2[0]])

    } catch (error) {
      setDataLoaded(false);
    }
  };

  const debounceFetchCountries = debounce(fetchCountries, 500);

  useEffect(() => {
    debounceFetchCountries();
  }, [props.countryOne, props.countryTwo]);

  const fetchExportData = async(id, country, iMode, year, cMode) => {
    const data = await fetch(`http://localhost:3001/api/data?country=${codes[country]}&flow=${iMode ? 'M' : 'X'}&year=${year}&cMode=${cMode}`)
    .then(response => response.json())
    .catch(error => console.error(error));
      
    id === 1 ? setTimeLoading(false) : setTimeLoading2(false);
    id === 1 ? setChartLoading(false) : setChartLoading2(false);

    if (data.count === 0 && id === 1) {
      setShowError(true);
    }

    else if (data.count > 0 && id === 1) {
      setShowError(false);
    }

    if (data.count === 0 && id === 2) {
      setShowError2(true);
    }

    else if (data.count > 0 && id === 2) {
      setShowError2(false);
    }

    return data;
  };

  const makeChartData = async() => {
    try {
      if (changeFlag1 && !changeFlag2) {
        const data1 = await fetchExportData(1, props.countryOne, importsMode, year1, countryMode);
        setChartData1(data1);
        setChangeFlag1(false);

        await new Promise(resolve => setTimeout(resolve, 10000));
        setSendReq(false);
      }

      else if (changeFlag2 && !changeFlag1) {
        const data2 = await fetchExportData(2, props.countryTwo, importsMode2, year2, countryMode2);
        setChartData2(data2);
        setChangeFlag2(false);

        await new Promise(resolve => setTimeout(resolve, 10000));
        setSendReq(false);
      }

      else {
        const data1 = await fetchExportData(1, props.countryOne, importsMode, year1, countryMode);
        setChartData1(data1);
        setChangeFlag1(false);

        await new Promise(resolve => setTimeout(resolve, 10000));

        const data2 = await fetchExportData(2, props.countryTwo, importsMode2, year2, countryMode2);
        setChartData2(data2);
        setChangeFlag2(false);

        await new Promise(resolve => setTimeout(resolve, 10000));
        setSendReq(false);
      }
    } catch (error) {
    }
  }

  useEffect(() => {
    if (sendReq) {
      makeChartData();
    }
  
    if (!firstRun && sendReq) {
      return () => {
      };
    } else {
      setFirstRun(false);
    }
  }, [sendReq, props.countryOne, props.countryTwo, importsMode, importsMode2, countryMode, countryMode2, year1, year2]);

  const cooldown = 
    <div className={styles.cooldown}>
      <p style={{margin: 'auto'}}>Wait for cooldown</p>
    </div>

  return (
    <div className={`${styles.canvas} ${props.darkMode ? styles.dark : ''}`}>
      <div className={styles.navBarPlacer}></div>
      <Navbar setCooldown={setCooldown} sendReq={sendReq} handleChange={props.handleChange} handleSelection={props.handleSelection} darkMode={props.darkMode} countryOne={props.countryOne} countryTwo={props.countryTwo}></Navbar>
      <div className={styles.sections}>
        <Section setCooldown={setCooldown} chartLoading={chartLoading} setByImports={setByImports} setByCountry={setByCountry} importsMode={importsMode} countryMode={countryMode} showError={showError} chartData={chartData1} year={year1} setNewYear={setNewYear} countryNum={0} 
                  sendReq={sendReq} timeLoading={timeLoading} country={props.countryOne} darkMode={props.darkMode} dataLoaded={dataLoaded} showLoading={showLoading} isOnline={isOnline} selectionChange={selectionChange} data={data}></Section>

        <Section setCooldown={setCooldown} chartLoading={chartLoading2} setByImports={setByImports} setByCountry={setByCountry} importsMode={importsMode2} countryMode={countryMode2} showError={showError2} chartData={chartData2} year={year2} setNewYear={setNewYear} countryNum={1} 
                  sendReq={sendReq} timeLoading={timeLoading2} country={props.countryTwo} darkMode={props.darkMode} dataLoaded={dataLoaded} showLoading={showLoading} isOnline={isOnline} selectionChange={selectionChange} data={data}></Section>
      </div>
      <div className={styles.mainSection}>
      </div>
      {cooldownMsg && cooldown}
    </div>
  )
})

export default InfoPage