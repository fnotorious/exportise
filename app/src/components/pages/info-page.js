import React, { useState } from 'react'
import styles from './info-page.module.css'
import banner from '../../assets/ITSCHRISTMAS.png'

import { DropdownMenu } from '../dropdown/dropdown'
import { BurgerMenu } from '../burger-menu/burger-menu'

const InfoPage = ({countryOne, countryTwo, darkMode}) => {
  const [selectedOption1, setSelectedOption1] = useState('');     // To capture selection from dropdown menu on left
  const [selectedOption2, setSelectedOption2] = useState('');     // To capture selection from dropdown menu on right
  const [showError, setShowError] = useState(false);              // To capture an error and display on screen

  let errorFlag = false;                                          // For checking if an error is present
  let error = "";                                                 // For storing the error message to display


  // If the selected options are the same
  if (selectedOption1 === selectedOption2) {
    error = <p className={styles.smallText}>Don't pick the same country!</p>
    errorFlag = true;
  }

  // If one or more of the dropdown menus have not been selected yet
  else if (selectedOption1 === 'none' || selectedOption2 === 'none' || selectedOption1 === '' || selectedOption2 === '') {
    error = <p className={styles.smallText}>Pick a country</p>
    errorFlag = true;
  }
  
  // Capture left dropdown menu selection
  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
  };
  
  // Capture right dropdown menu selection
  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  return (
    <div className={`${styles.canvas} ${darkMode ? styles.dark : ''}`}>
      <div className={styles.navBar}>
        <img src={banner} alt="BANNER" className={styles.logoBanner}></img>
        <div className={styles.navBarSection}>
          <div className={styles.dropdown}>
            <DropdownMenu darkMode={darkMode} size="short" onChange={handleOption1Change}></DropdownMenu>
          </div>
          <div className={styles.dropdown}>
            <DropdownMenu darkMode={darkMode} size="short" onChange={handleOption2Change}></DropdownMenu>
          </div>
        </div>
      </div>
      <div className={styles.mainSection}></div>
    </div>
  )
}

export default InfoPage