import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './front-page.module.css'
import banner from '../../assets/ITSCHRISTMAS.png'

import { DropdownMenu } from '../dropdown/dropdown'
import { BurgerMenu } from '../burger-menu/burger-menu'

export default function FrontPage() {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  let errorFlag = false;
  let error = "";
  if (selectedOption1 === selectedOption2) {
    error = <p className={`${styles.smallText} ${isDarkMode ? styles.darkGray : ''}`}>Don't pick the same country!</p>
    errorFlag = true;
  }

  else if (selectedOption1 === 'none' || selectedOption2 === 'none' || selectedOption1 === '' || selectedOption2 === '') {
    error = <p className={`${styles.smallText} ${isDarkMode ? styles.darkGray : ''}`}>Pick a country</p>
    errorFlag = true;
  }

  const toggleDarkMode = () => {
    setIsDarkMode((prevDarkSetting) => !prevDarkSetting);;
  }
 
  const handleSubmit = () => {
    if (errorFlag) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
        errorFlag = false;
      }, 1500);
    }

    else {
      navigate('/loading');
    }
  };

  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  return (
    <div className={`${styles.canvas} ${isDarkMode ? styles.darkWhite : ''}`}>
        <div className={styles.mainSection}>
            <div className={styles.burgerMenuBox}>
              <BurgerMenu darkMode={toggleDarkMode}></BurgerMenu>
            </div>
            <div className={styles.centerBox}>
                <img src={banner} alt="BANNER" className={styles.logoBanner}></img>
                <div className={`${styles.logoText} ${isDarkMode ? styles.darkGray : ''}`}>Comparing trade and economy between nations</div>
                <div className={styles.inputSection}>
                  <div className={styles.menuOne}>
                    <DropdownMenu darkMode={isDarkMode} onChange={handleOption1Change}></DropdownMenu>
                  </div>
                  <div className={styles.inputTextSection}>
                    <h2 className={`${styles.letsCompare} ${isDarkMode ? styles.darkGray : ''}`}>Let's compare:</h2>
                    <h3 className={`${styles.and} ${isDarkMode ? styles.darkGray : ''}`}>and...</h3>
                  </div>
                  <div className={styles.menuTwo}>
                    <DropdownMenu darkMode={isDarkMode} onChange={handleOption2Change}></DropdownMenu>
                  </div>
                </div>
                <button className={styles.compareButton} onClick={handleSubmit}>Compare!</button>
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
