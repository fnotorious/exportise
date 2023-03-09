import  React, { useEffect, useState } from 'react'
import styles from './info-page.module.css'

import { Section } from '../section/section'
import { Navbar } from '../navbar/navbar'

const InfoPage = React.memo((props) => {
  const [showLoading, setShowLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [prevSelection, setPrevSelection] = useState([props.countryOne, props.countryTwo]);
  const [selectionChange, setSelectionChange] = useState(true);
  const [firstRun, setFirstRun] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState(null);
  const headers = {
    'Cache-Control': 'no-cache',

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
          fetch(`https://restcountries.com/v3.1/alpha/${props.countryOne}`, {  }).then((res) => res.json()),
          fetch(`https://restcountries.com/v3.1/alpha/${props.countryTwo}`).then((res) => res.json()),
        ]);
        setDataLoaded(true);
        setData([country1[0], country2[0]])

      } catch (error) {
        
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className={`${styles.canvas} ${props.darkMode ? styles.dark : ''}`}>
      <Navbar handleChange={props.handleChange} handleSelection={props.handleSelection} darkMode={props.darkMode} countryOne={props.countryOne} countryTwo={props.countryTwo}></Navbar>
      <Section countryNum={0} country={props.countryOne} darkMode={props.darkMode} dataLoaded={dataLoaded} showLoading={showLoading} isOnline={isOnline} selectionChange={selectionChange} data={data}></Section>
      <Section countryNum={1} country={props.countryTwo} darkMode={props.darkMode} dataLoaded={dataLoaded} showLoading={showLoading} isOnline={isOnline} selectionChange={selectionChange} data={data}></Section>
      <div className={styles.mainSection}>
      
      </div>
    </div>
  )
})

export default InfoPage