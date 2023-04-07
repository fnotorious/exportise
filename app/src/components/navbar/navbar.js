import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './navbar.module.css'
import logo from '../../assets/Logo.svg'

import { Recent } from '../button/recent'
import { DropdownMenu } from '../dropdown/dropdown'
import { BurgerMenu } from '../burger-menu/burger-menu'

export const Navbar = React.memo((props) => {
    const [recents, setRecents] = useState([
        [props.countryOne, props.countryTwo],
        ["", ""],
        ["", ""]
      ])

      const [selectedOption1, setSelectedOption1] = useState('');     // To capture selection from dropdown menu on left
      const [selectedOption2, setSelectedOption2] = useState('');     // To capture selection from dropdown menu on right
    
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
        if (errorFlag === false && !props.sendReq) {
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

      // Toggle dark mode for this page and all other pages in the app
      const toggleDarkMode = () => {
        props.handleChange(!props.darkMode);
      }
    
      const handleRecentsSubmit = (countryOne, countryTwo) => {
        if (!props.sendReq) {
          props.handleSelection(countryOne, countryTwo);
    
          setRecents((prevRecents) => {
            const newRecents = [...prevRecents];
            newRecents[2] = newRecents[1];
            newRecents[1] = newRecents[0];
            newRecents[0] = [countryOne, countryTwo];
            return newRecents;
          });
        }
    
        navigate('/info');
      };

  return (
    <div className={`${styles.navBar} ${props.darkMode ? styles.dark : ''}`}>
        <div className={styles.logoBanner}>
          <img src={logo} alt="logo" className={styles.logo}></img>
          <h1 className={styles.title}>Exportise</h1>
        </div>
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
  )
})

export default Navbar