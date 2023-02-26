import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './front-page.module.css'
import banner from '../../assets/ITSCHRISTMAS.png'

import { DropdownMenu } from '../dropdown/dropdown'
import { BurgerMenu } from '../burger-menu/burger-menu'

const FrontPage = React.memo((props) => {
  const [selectedOption1, setSelectedOption1] = useState('');     // To capture selection from dropdown menu on left
  const [selectedOption2, setSelectedOption2] = useState('');     // To capture selection from dropdown menu on right
  const [showError, setShowError] = useState(false);              // To capture an error and display on screen
  
  const navigate = useNavigate();                                 // To navigate to next page

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

  // Toggle dark mode for this page and all other pages in the app
  const toggleDarkMode = () => {
    props.handleChange(!props.darkMode);
  }
 
  // Submit and check for errors upon submit
  const handleSubmit = () => {
    if (errorFlag) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
        errorFlag = false;
      }, 1500);
    }

    else {
      props.handleSelection(selectedOption1, selectedOption2);
      navigate('/loading');
    }
  };

  // Capture left dropdown menu selection
  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  // Capture right dropdown menu selection
  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  return (
    <>
      <div className={`${styles.canvas} ${props.darkMode ? styles.dark : ''}`}>
          <div className={styles.mainSection}>
              <div className={styles.burgerMenuBox}>
                <BurgerMenu darkModeFunction={toggleDarkMode} darkMode={props.darkMode}></BurgerMenu>
              </div>
              <div className={styles.centerBox}>
                  <img src={banner} alt="BANNER" className={styles.logoBanner}></img>
                  <div className={styles.logoText}>Comparing trade and economy between nations</div>
                  <div className={styles.inputSection}>
                    <div className={styles.menuOne}>
                      <DropdownMenu darkMode={props.darkMode} onChange={handleOption1Change}></DropdownMenu>
                    </div>
                    <div className={styles.inputTextSection}>
                      <h2 className={styles.letsCompare}>Let's compare:</h2>
                      <h3 className={styles.and}>with</h3>
                    </div>
                    <div className={styles.menuTwo}>
                      <DropdownMenu darkMode={props.darkMode} onChange={handleOption2Change}></DropdownMenu>
                    </div>
                  </div>
                  <button className={styles.compareButton} onClick={handleSubmit}>Compare!</button>
                  {showError && error}
              </div>
              <div className={styles.textBox}>
                <h3 className={styles.madeBy}>Made by fnotorious</h3>
                <p className={styles.smallText}>@https://github.com/fnotorious</p>
              </div>
          </div>
      </div>
    </>
  )
})

export default FrontPage;