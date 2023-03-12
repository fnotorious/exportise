import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styles from './loading-screen.module.css'

import LoadingAnimation from "../loading-animation/loading-animation";
import Button from '../button/button'
import Flag from 'react-flagkit';
import NoSymbol from '../../assets/No-Symbol.svg';

const LoadingScreen = ({countryOne, countryTwo, darkMode}) => {
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();     
  
  useEffect(() => {
    if (navigator.onLine) {
      const timeOut = setTimeout(() => {
        navigate('/info');
      }, 5000); 

      return () => {
        clearTimeout(timeOut);
      };
    } else {
      setShowError(true);
    }
  }, [navigate]);

  return (
    <div className={`${styles.canvas} ${darkMode ? styles.dark : ''}`}>
      <div className={styles.mainSection}>
        <div className={styles.centerBox}>
          <div className={styles.contentDisplay}>
            <LoadingAnimation darkMode={darkMode}></LoadingAnimation>
            <h2 className={styles.loading}>{showError ? 'No connection. Make sure your internet is on and try again.' : 'Loading'}</h2>
            <div className={styles.flagDisplay}>
              <div className={styles.flagPlacement}>
              {showError ? <img src={NoSymbol} alt="NO" /> : <Flag country={countryOne.toUpperCase()} size={46} className={styles.flags} />}
              </div>
              <div className={styles.flagPlacement}>
                {showError ? <img src={NoSymbol} alt="NO" /> : <Flag country={countryTwo.toUpperCase()} size={46} className={styles.flags} />}
              </div>
            </div>
          </div>
          <div className={styles.buttonPlacement}>
            <Button name="Cancel" navigateTo='/'></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen