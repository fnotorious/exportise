import  React, { useEffect, useState } from 'react'
import { debounce } from 'lodash'
import styles from './info-page.module.css'

import { Section } from '../section/section'
import { Navbar } from '../navbar/navbar'

const InfoPage = React.memo((props) => {
  const [showLoading, setShowLoading] = useState(false);
  const [chartLoading, setChartLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [prevSelection, setPrevSelection] = useState([props.countryOne, props.countryTwo]);
  const [selectionChange, setSelectionChange] = useState(true);
  const [sendReq, setSendReq] = useState(true);
  const [firstRun, setFirstRun] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState(null);
  const [year1, setYear1] = useState(2020);
  const [year2, setYear2] = useState(2020);
  const [chartData, setChartData] = useState(null);
  const [importsMode, setImportsMode] = useState(false);
  const [importsMode2, setImportsMode2] = useState(false);
  const [countryMode, setCountryMode] = useState(false);
  const [countryMode2, setCountryMode2] = useState(false);
  const [showError, setShowError] = useState(false);
  const API_KEY = '562a82ab18f844f78e5591084963c499';

  const setNewYear = (newYear, countryNum) => {
    if (countryNum === 0) {
      setYear1(newYear);
    }

    else {
      setYear2(newYear);
    }

    setSendReq(true);
  }

  const setByCountry = (value, countryNum) => {
    if (countryNum === 0) {
      setCountryMode(value);
    }

    else {
      setCountryMode2(value);
    }

    setSendReq(true);
    setChartLoading(true);
  }

  const setByImports = (value, countryNum) => {
    if (countryNum === 0) {
      setImportsMode(value);
    }

    else {
      setImportsMode2(value);
    }

    setSendReq(true);
    setChartLoading(true);
  }

  const codes = {
    'al' : '8',
    'dz' : '12',
    'ao' : '24',
    'ar' : '32',
    'am' : '51',
    'au' : '36',
    'at' : '40',
    'az' : '31',
    'bh' : '48',
    'bd' : '50',
    'by' : '112',
    'be' : '56',
    'bo' : '68',
    'ba' : '70',
    'bw' : '72',
    'br' : '76',
    'bg' : '100',
    'bf' : '854',
    'kh' : '116',
    'cm' : '120',
    'ca' : '124',
    'cl' : '152',
    'cn' : '156',
    'co' : '170',
    'km' : '174',
    'cg' : '170',
    'cd' : '180',
    'cr' : '188',
    'hr' : '191',
    'cu' : '192',
    'cy' : '196',
    'cz' : '203',
    'dk' : '208',
    'do' : '214',
    'ec' : '218',
    'eg' : '818',
    'sv' : '222',
    'ee' : '233',
    'et' : '231',
    'fi' : '246',
    'fr' : '251',
    'ga' : '266',
    'ge' : '268',
    'de' : '276',
    'gh' : '288',
    'gr' : '300',
    'gt' : '320',
    'gn' : '324',
    'hn' : '340',
    'hu' : '348',
    'is' : '352',
    'in' : '699',
    'id' : '360',
    'ir' : '364',
    'iq' : '368',
    'ie' : '372',
    'il' : '376',
    'it' : '381',
    'jm' : '388',
    'jp' : '392',
    'jo' : '400',
    'kz' : '398',
    'ke' : '404',
    'kr' : '410',
    'kw' : '414',
    'kg' : '417',
    'la' : '418',
    'lv' : '428',
    'lb' : '422',
    'ls' : '426',
    'lr' : '430',
    'ly' : '434',
    'lt' : '440',
    'mk' : '807',
    'mg' : '450',
    'mw' : '454',
    'my' : '458',
    'ml' : '466',
    'mr' : '478',
    'mu' : '480',
    'mx' : '484',
    'md' : '498',
    'mn' : '496',
    'ma' : '504',
    'mz' : '508',
    'mm' : '104',
    'na' : '516',
    'np' : '524',
    'nl' : '528',
    'nz' : '554',
    'ni' : '558',
    'ng' : '566',
    'no' : '579',
    'om' : '512',
    'pk' : '586',
    'ps' : '275',
    'pa' : '591',
    'pg' : '598',
    'py' : '600',
    'pe' : '604',
    'ph' : '608',
    'pl' : '616',
    'pt' : '620',
    'qa' : '634',
    'ro' : '642',
    'ru' : '643',
    'sa' : '682',
    'sn' : '686',
    'rs' : '688',
    'sg' : '702',
    'sk' : '703',
    'si' : '705',
    'za' : '710',
    'es' : '724',
    'lk' : '144',
    'sd' : '729',
    'sz' : '748',
    'se' : '752',
    'ch' : '757',
    'sy' : '760',
    'tj' : '762',
    'tz' : '834',
    'th' : '764',
    'tg' : '768',
    'tt' : '780',
    'tn' : '788',
    'tr' : '792',
    'tm' : '795',
    'ug' : '800',
    'ua' : '804',
    'ae' : '784',
    'gb' : '826',
    'us' : '842',
    'uy' : '858',
    'uz' : '860',
    've' : '862',
    'vn' : '704',
    'ye' : '887',
    'zm' : '894',
    'zw' : '716'
  }

  useEffect(() => {
    if (firstRun || (prevSelection[0] !== props.countryOne || prevSelection[1] !== props.countryTwo)) {
      setSelectionChange(false);
      setPrevSelection([props.countryOne, props.countryTwo]);
      setFirstRun(false);
      setDataLoaded(false);
    }
  }, [prevSelection, props.countryOne, props.countryTwo, firstRun]);

  useEffect(() => {
    if (selectionChange === false) {
      setShowLoading(true);  
      setChartLoading(true);
      const timer = setTimeout(() => {
        setSelectionChange(true);
        setSendReq(true);
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
      
    }
  };

  const debounceFetchCountries = debounce(fetchCountries, 2000);

  useEffect(() => {
    debounceFetchCountries();
  }, [props.countryOne, props.countryTwo]);

  const fetchExportData = async () => {
    try {
      const data1 = await fetch(`http://comtrade.un.org/api/get?type=C&freq=A&px=S2&ps=${year1}&r=${codes[props.countryOne]}&p=${countryMode ? 'ALL' : '0'}&rg=${importsMode ? '1' : '2'}&cc=${countryMode ? 'TOTAL' : 'ALL'}&fmt=json&max=5000&token=${API_KEY}`).then((res) => res.json());
      const data2 = await fetch(`http://comtrade.un.org/api/get?type=C&freq=A&px=S2&ps=${year2}&r=${codes[props.countryTwo]}&p=${countryMode2 ? 'ALL' : '0'}&rg=${importsMode2 ? '1' : '2'}&cc=${countryMode2 ? 'TOTAL' : 'ALL'}&fmt=json&max=5000&token=${API_KEY}`).then((res) => res.json());
      setChartLoading(false);
      setShowError(false);
      setSendReq(false);

      setChartData([data1, data2]);
    } catch (error) {
      if (isOnline) {
        fetchExportData();
      }

      else if (isOnline === false || selectionChange || sendReq === true) {
        setShowError(true);
      }
    }
  };

  const debouncedFetchData = debounce(fetchExportData, 1000);

  useEffect(() => {
      if (data && data.length > 0 && selectionChange && sendReq) {
        debouncedFetchData();
      }
  }, [year1, year2, importsMode, countryMode, selectionChange, sendReq, data, props.countryOne, props.countryTwo]);

  return (
    <div className={`${styles.canvas} ${props.darkMode ? styles.dark : ''}`}>
      <div className={styles.navBarPlacer}></div>
      <Navbar handleChange={props.handleChange} handleSelection={props.handleSelection} darkMode={props.darkMode} countryOne={props.countryOne} countryTwo={props.countryTwo}></Navbar>
      <div className={styles.sections}>
        <Section chartLoading={chartLoading} setByImports={setByImports} setByCountry={setByCountry} importsMode={importsMode} countryMode={countryMode} showError={showError} chartData={chartData} year={year1} setNewYear={setNewYear} countryNum={0} 
                  country={props.countryOne} darkMode={props.darkMode} dataLoaded={dataLoaded} showLoading={showLoading} isOnline={isOnline} selectionChange={selectionChange} data={data}></Section>

        <Section chartLoading={chartLoading} setByImports={setByImports} setByCountry={setByCountry} importsMode={importsMode} countryMode={countryMode2} showError={showError} chartData={chartData} year={year2} setNewYear={setNewYear} countryNum={1} 
                  country={props.countryTwo} darkMode={props.darkMode} dataLoaded={dataLoaded} showLoading={showLoading} isOnline={isOnline} selectionChange={selectionChange} data={data}></Section>
      </div>
      <div className={styles.mainSection}>
      
      </div>
    </div>
  )
})

export default InfoPage