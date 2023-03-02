import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './info-page.module.css'
import banner from '../../assets/ITSCHRISTMAS.png'
import Flag from 'react-flagkit'

import { Recent } from '../button/recent'
import { DropdownMenu } from '../dropdown/dropdown'
import { BurgerMenu } from '../burger-menu/burger-menu'

const InfoPage = React.memo((props) => {
  const [selectedOption1, setSelectedOption1] = useState('');     // To capture selection from dropdown menu on left
  const [selectedOption2, setSelectedOption2] = useState('');     // To capture selection from dropdown menu on right
  const [recents, setRecents] = useState([
    [props.countryOne, props.countryTwo],
    ["", ""],
    ["", ""]
  ])

  const navigate = useNavigate();                                 // To navigate to next page

  let errorFlag = false;                                          // For checking if an error is present

  // If the selected options are the same
  if (selectedOption1 === selectedOption2) {
    errorFlag = true;
  }

  // If one or more of the dropdown menus have not been selected yet
  else if (selectedOption1 === 'none' || selectedOption2 === 'none' || selectedOption1 === '' || selectedOption2 === '') {
    errorFlag = true;
  }

  else {
    errorFlag = false;
  }
  
  // Capture left dropdown menu selection
  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
  };
  
  // Capture right dropdown menu selection
  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  // Submit and check for errors upon submit
  const handleSubmit = () => {
    if (errorFlag === false) {
      props.handleSelection(selectedOption1, selectedOption2);

      setRecents((prevRecents) => {
        const newRecents = [...prevRecents];
        newRecents[2] = newRecents[1];
        newRecents[1] = newRecents[0];
        newRecents[0] = [selectedOption1, selectedOption2];
        return newRecents;
      });
      
      navigate('/info');
    }
  };

  const handleRecentsSubmit = (countryOne, countryTwo) => {
    props.handleSelection(countryOne, countryTwo);

    setRecents((prevRecents) => {
      const newRecents = [...prevRecents];
      newRecents[2] = newRecents[1];
      newRecents[1] = newRecents[0];
      newRecents[0] = [countryOne, countryTwo];
      return newRecents;
    });

    navigate('/info');
  };

  // Toggle dark mode for this page and all other pages in the app
  const toggleDarkMode = () => {
    props.handleChange(!props.darkMode);
  }

  return (
    <div className={`${styles.canvas} ${props.darkMode ? styles.dark : ''}`}>
      <div className={styles.navBar}>
        <img src={banner} alt="BANNER" className={styles.logoBanner}></img>
        <div className={styles.navBarSection}>
          <div className={styles.buttons}>
            <div className={styles.navItem}>
              <Recent array={recents} handleSelection={handleRecentsSubmit} darkMode={props.darkMode}></Recent>
            </div>
            <div className={`${styles.dropdown} ${styles.navItem}`}>
              <DropdownMenu darkMode={props.darkMode} size="short" onChange={handleOption1Change}></DropdownMenu>
            </div>
            <div className={`${styles.text} ${styles.navItem}`}>
              vs
            </div>
            <div className={`${styles.dropdown} ${styles.navItem}`}>
              <DropdownMenu darkMode={props.darkMode} size="short" onChange={handleOption2Change}></DropdownMenu>
            </div>
            <div className={styles.navItem}>
              <button className={styles.compareButton} onClick={handleSubmit}>
                Compare
              </button>
            </div>
          </div>
          <div className={styles.burgerMenuBox}>
            <BurgerMenu darkModeFunction={toggleDarkMode} darkMode={props.darkMode}></BurgerMenu>
          </div>
        </div>
      </div>
      <div className={styles.mainSection}>
        <Flag country={props.countryOne.toUpperCase()} size={40} className={styles.flags} />
        <Flag country={props.countryTwo.toUpperCase()} size={40} className={styles.flags} />
      </div>
    </div>
  )
})

export default InfoPage