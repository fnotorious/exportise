import  React, { useEffect, useState } from 'react'
import styles from './info-page.module.css'
import Flag from 'react-flagkit'

import NoSymbol from '../../assets/No-Symbol.svg';
import { Navbar } from '../navbar/navbar'

const InfoPage = React.memo((props) => {
  const [showLoading, setShowLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [prevSelection, setPrevSelection] = useState([props.countryOne, props.countryTwo]);
  const [selectionChange, setSelectionChange] = useState(true);
  const [firstRun, setFirstRun] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState(null);

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
      const timer = setTimeout(() => {
        setSelectionChange(true);
        setShowLoading(false);
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

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const [country1, country2] = await Promise.all([
          fetch(`https://restcountries.com/v3.1/alpha/${props.countryOne}`).then((res) => res.json()),
          fetch(`https://restcountries.com/v3.1/alpha/${props.countryTwo}`).then((res) => res.json()),
        ]);
        setDataLoaded(true);
        setData([country1[0], country2[0]])

      } catch (error) {
        
      }
    };

    fetchCountries();
  }, [props.countryOne, props.countryTwo, data]);

  return (
    <div className={`${styles.canvas} ${props.darkMode ? styles.dark : ''}`}>
      <Navbar handleChange={props.handleChange} handleSelection={props.handleSelection} darkMode={props.darkMode} countryOne={props.countryOne} countryTwo={props.countryTwo}></Navbar>
      <div className={styles.section}>
        <div className={styles.banner}>
          {isOnline === false ? <h3>No connection</h3> : 
            showLoading ? <div className={styles.loader}></div> : 
              <img className={`${selectionChange ? styles.fadeIn : ''} ${styles.image}`} src={`https://cdn.jsdelivr.net/gh/fnotorious/exportecon-banners/${props.countryOne}.png`} alt=""></img>}
          {showLoading === false ? <div className={styles.shadow}></div> : ''}
          <div className={styles.names}>
            <div className={styles.nameDisplay}>
              {dataLoaded === false || isOnline === false ? <div className={styles.nameLoader}></div> : <h3 className={styles.name}>{data[0].name.common}</h3>}
            </div>
            <div className={styles.nativeNameDisplay}>
              {dataLoaded === false || isOnline === false ? <div className={styles.nativeNameLoader}></div> : <h3 className={styles.nativeName}>{data[0].name.nativeName[Object.keys(data[0].name.nativeName)[0]].common}</h3>}
            </div>
          </div>
        </div>
        <div className={styles.flagDisplay}>
          <div className={styles.flagPlacement}></div>
            {isOnline === false ? <img className={styles.error} src={NoSymbol} alt="NO"></img> :
                showLoading ? <div className={styles.flagLoader}></div> :
                    <Flag country={props.countryOne.toUpperCase()} size={185} className={`${selectionChange ? styles.fadeIn : ''} ${styles.flags}`} />}
          </div>
      </div>
      <div className={styles.section}>
        <div className={styles.banner}>
          {isOnline === false ? <h3>No connection</h3> : 
              showLoading ? <div className={styles.loader}></div> : 
                <img className={`${selectionChange ? styles.fadeIn : ''} ${styles.image}`} src={`https://cdn.jsdelivr.net/gh/fnotorious/exportecon-banners/${props.countryTwo}.png`} alt=""></img>}
          {showLoading === false ? <div className={styles.shadow}></div> : ''}
          <div className={styles.names}>
            <div className={styles.nameDisplay}>
              {dataLoaded === false || isOnline === false ? <div className={styles.nameLoader}></div> : <h3 className={styles.name}>{data[1].name.common}</h3>}
            </div>
            <div className={styles.nativeNameDisplay}>
              {dataLoaded === false || isOnline === false ? <div className={styles.nativeNameLoader}></div> : <h3 className={styles.nativeName}>{data[1].name.nativeName[Object.keys(data[1].name.nativeName)[0]].common}</h3>}
            </div>
          </div>
        </div>
        <div className={styles.flagDisplay}>
          <div className={styles.flagPlacement}></div>
            {isOnline === false ? <img className={styles.error} src={NoSymbol} alt="NO"></img> :
                showLoading ? <div className={styles.flagLoader}></div> :
                    <Flag country={props.countryTwo.toUpperCase()} size={185} className={`${selectionChange ? styles.fadeIn : ''} ${styles.flags}`} />}
        </div>
      </div>
      <div className={styles.mainSection}>
      
      </div>
    </div>
  )
})

export default InfoPage