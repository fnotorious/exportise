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
  const [chartData, setChartData] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [prevSelection, setPrevSelection] = useState([props.countryOne, props.countryTwo]);
  const [selectionChange, setSelectionChange] = useState(true);
  const [showError, setShowError] = useState(false);
  const [showError2, setShowError2] = useState(false);

  const [sendReq, setSendReq] = useState(true);
  const [firstRun, setFirstRun] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState(null);

  const [year1, setYear1] = useState(2020);
  const [year2, setYear2] = useState(2020);

  const [importsMode, setImportsMode] = useState(false);
  const [importsMode2, setImportsMode2] = useState(false);

  const [countryMode, setCountryMode] = useState(false);
  const [countryMode2, setCountryMode2] = useState(false);

  const setNewYear = (newYear, countryNum) => {
    if (countryNum === 0) {
      setYear1(newYear);
      setTimeLoading(true);
    }

    else {
      setYear2(newYear);
      setTimeLoading2(true);
    }

    setSendReq(true);
  }

  const setByCountry = (countryNum) => {
    if (countryNum === 0 && !sendReq) {
      setCountryMode((prevValue) => !prevValue);
      setChartLoading(true);
    }

    else if (countryNum === 1 && !sendReq) {
      setCountryMode2((prevValue) => !prevValue);
      setChartLoading2(true);
    }

    setSendReq(true);
  }

  const setByImports = (countryNum) => {
    if (countryNum === 0 && !sendReq) {
      setImportsMode((prevValue) => !prevValue);
      setChartLoading(true);
    }

    else if (countryNum === 1 && !sendReq) {
      setImportsMode2((prevValue) => !prevValue);
      setChartLoading2(true);
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

  const fetchExportData = () => {

    fetch(`http://localhost:3001/api/data?country=${codes[props.countryOne]}&flow=${importsMode ? 'M' : 'X'}&year=${year1}&cMode=${countryMode}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.error(error));

    /*
    const data1 = await fetch(`https://comtradeapi.un.org/data/v1/get/C/A/HS?reporterCode=36&period=2020&flowCode=X&aggregateBy=cmdCode&breakdownMode=classic&includeDesc=false&cmdCode=total`
    , { 
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
          'Ocp-Apim-Subscription-Key': `${API_KEY}`,
        },
        signal: controller.signal 
      })
      .then(res => {
        console.log(res);

        if (!res.ok) {
          if (res.status === 500) {
            setShowError(true);
            setChartLoading(false);
          }

          else {
            fetchExportData(controller);
          }
        }})
      .then(data => {
        console.log(data); // access the JSON data
      });
    
    setTimeLoading(false);

    const data2 = await fetch(`http://comtrade.un.org/api/get?type=C&freq=A&px=HS&ps=${year2}&r=${codes[props.countryTwo]}&p=${countryMode2 ? 'ALL' : '0'}&rg=${importsMode2 ? '1' : '2'}&cc=${countryMode2 ? 'TOTAL' : 'ALL'}&fmt=json&max=5000&token=${API_KEY}`
    , { signal: controller.signal })
      .then(res => {
        if (!res.ok) {
          if (res.status === 500) {
            setShowError(true);
            setChartLoading2(false);
          }

          else {
            fetchExportData(controller);
          }
        }

        return res.json();
      })

    setTimeLoading2(false);
    setChartLoading(false);
    setChartLoading2(false);
    setSendReq(false);

    if (data1.dataset.length === 0) {
      setShowError(true);
    }

    else {
      setShowError(false);
    }

    if (data2.dataset.length === 0) {
      setShowError2(true);
    }

    else {
      setShowError2(false);
    }

    console.log(data1);

    setChartData([data1.data, data2.dataset]);
    */
  };

  const debounceExportData = debounce(fetchExportData, 1000);

  useEffect(() => {
    const controller = new AbortController();

    if (sendReq) {
      debounceExportData();
    }
  
    if (!firstRun && sendReq) {
      return () => {
        controller.abort();
      };
    } else {
      setFirstRun(false);
    }
  }, [sendReq, props.countryOne, props.countryTwo, importsMode, importsMode2, countryMode, countryMode2, year1, year2]);

  return (
    <div className={`${styles.canvas} ${props.darkMode ? styles.dark : ''}`}>
      <div className={styles.navBarPlacer}></div>
      <Navbar handleChange={props.handleChange} handleSelection={props.handleSelection} darkMode={props.darkMode} countryOne={props.countryOne} countryTwo={props.countryTwo}></Navbar>
      <div className={styles.sections}>
        <Section chartLoading={chartLoading} setByImports={setByImports} setByCountry={setByCountry} importsMode={importsMode} countryMode={countryMode} showError={showError} chartData={chartData} year={year1} setNewYear={setNewYear} countryNum={0} 
                  sendReq={sendReq} timeLoading={timeLoading} country={props.countryOne} darkMode={props.darkMode} dataLoaded={dataLoaded} showLoading={showLoading} isOnline={isOnline} selectionChange={selectionChange} data={data}></Section>

        <Section chartLoading={chartLoading2} setByImports={setByImports} setByCountry={setByCountry} importsMode={importsMode2} countryMode={countryMode2} showError={showError2} chartData={chartData} year={year2} setNewYear={setNewYear} countryNum={1} 
                  sendReq={sendReq} timeLoading={timeLoading2} country={props.countryTwo} darkMode={props.darkMode} dataLoaded={dataLoaded} showLoading={showLoading} isOnline={isOnline} selectionChange={selectionChange} data={data}></Section>
      </div>
      <div className={styles.mainSection}>
      
      </div>
    </div>
  )
})

export default InfoPage