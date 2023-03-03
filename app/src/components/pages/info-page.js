import  React, { useEffect, useState } from 'react'
import styles from './info-page.module.css'
import Flag from 'react-flagkit'

import sampleBanner from '../../assets/sampleBanner.png'
import sampleBanner2 from '../../assets/sampleBanner2.png'
import NoSymbol from '../../assets/No-Symbol.svg';
import { Navbar } from '../navbar/navbar'

const InfoPage = React.memo((props) => {
  const [showLoading, setShowLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [prevSelection, setPrevSelection] = useState([props.countryOne, props.countryTwo]);
  const [selectionChange, setSelectionChange] = useState(true);
  const [firstRun, setFirstRun] = useState(true);

  useEffect(() => {
    if (firstRun || (prevSelection[0] !== props.countryOne || prevSelection[1] !== props.countryTwo)) {
      setSelectionChange(false);
      setPrevSelection([props.countryOne, props.countryTwo]);
      setFirstRun(false);
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

  return (
    <div className={`${styles.canvas} ${props.darkMode ? styles.dark : ''}`}>
      <Navbar handleChange={props.handleChange} handleSelection={props.handleSelection} darkMode={props.darkMode} countryOne={props.countryOne} countryTwo={props.countryTwo}></Navbar>
      <div className={styles.section}>
        <div className={styles.banner}>
          {isOnline === false ? <h3>No connection</h3> : 
            showLoading ? <div className={styles.loader}></div> : 
              <img className={`${selectionChange ? styles.fadeIn : ''} ${styles.image}`} src={sampleBanner} alt=""></img>}
          <div className={styles.shadow}></div>
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
                <img className={`${selectionChange ? styles.fadeIn : ''} ${styles.image}`} src={sampleBanner2} alt=""></img>}
          <div className={styles.shadow}></div>
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