import React, { useState } from 'react'
import styles from './front-page.module.css'
import banner from '../../assets/ITSCHRISTMAS.png'
import bannerDark from '../../assets/homepage-design-CHRISTMAS-PNG-DARK.png'

import { DropdownMenu } from '../dropdown/dropdown'
import { BurgerMenu } from '../burger-menu/burger-menu'

export default function FrontPage() {
  
  let error = "";

  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showError, setShowError] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevDarkSetting) => !prevDarkSetting);;
    console.log(isDarkMode);
  }
 
  const handleError = () => {
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, 1500);
  };

  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  if (selectedOption1 === selectedOption2) {
    error = <p className={styles.smallText}>Don't pick the same country!</p>
  }

  else if (selectedOption1 === 'none' || selectedOption2 === 'none' || selectedOption1 === '' || selectedOption2 === '') {
    error = <p className={styles.smallText}>Pick a country</p>
  }

  else {
    error = null;
  }

  return (
    <div className={`${styles.canvas} ${isDarkMode ? styles.darkWhite : ''}`}>
        <div className={styles.mainSection}>
            <div className={styles.burgerMenuBox}>
              <BurgerMenu darkMode={toggleDarkMode}></BurgerMenu>
            </div>
            <div className={styles.centerBox}>
                <img src={isDarkMode ? bannerDark : banner } alt="BANNER" className={styles.logoBanner}></img>
                <div className={`${styles.logoText} ${isDarkMode ? styles.darkGray : ''}`}>Comparing trade and economy between nations</div>
                <div className={styles.inputSection}>
                  <div className={styles.menuOne}>
                    <DropdownMenu onChange={handleOption1Change}></DropdownMenu>
                  </div>
                  <div className={styles.inputTextSection}>
                    <h2 className={`${styles.letsCompare} ${isDarkMode ? styles.darkGray : ''}`}>Let's compare:</h2>
                    <h3 className={`${styles.and} ${isDarkMode ? styles.darkGray : ''}`}>and...</h3>
                  </div>
                  <div className={styles.menuTwo}>
                    <DropdownMenu onChange={handleOption2Change}></DropdownMenu>
                  </div>
                </div>
                <button className={`${styles.compareButton} ${isDarkMode ? styles.compareButtonDark : ''}`} onClick={handleError}>Compare!</button>
                {showError && error}
            </div>
            <div className={styles.textBox}>
              <h3 className={`${styles.madeBy} ${isDarkMode ? styles.darkGray : ''}`}>Made by fnotorious</h3>
              <p className={`${styles.smallText} ${isDarkMode ? styles.darkGray : ''}`}>@https://github.com/fnotorious</p>
            </div>
        </div>
    </div>
  )
}
