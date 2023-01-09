import React, { useState } from 'react'
import styles from './front-page.module.css'
import banner from '../../assets/homepage-design-CHRISTMAS-PNG.png'

import { DropdownMenu } from '../dropdown/dropdown'

export default function FrontPage() {
  
  let error = "";

  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const [showComponent, setShowComponent] = useState(false);

  const handleButtonClick = () => {
    setShowComponent(true);

    console.log(selectedOption1);
    console.log(selectedOption2);

    setTimeout(() => {
      setShowComponent(false);
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
    <div className={styles.canvas}>
        <div className={styles.mainSection}>
            <div className={styles.centerBox}>
                <img src={banner} alt="BANNER" className={styles.logoBanner}></img>
                <div className={styles.logoText}>Comparing trade and economy between nations</div>
                <div className={styles.inputSection}>
                  <div className={styles.menuOne}>
                    <DropdownMenu onChange={handleOption1Change}></DropdownMenu>
                  </div>
                  <div className={styles.inputTextSection}>
                    <h2 className={styles.letsCompare}>Let's compare:</h2>
                    <h3 className={styles.and}>and...</h3>
                  </div>
                  <div className={styles.menuTwo}>
                    <DropdownMenu onChange={handleOption2Change}></DropdownMenu>
                  </div>
                </div>
                <button className={styles.compareButton} onClick={handleButtonClick}>Compare!</button>
                {showComponent && error}
            </div>
            <div className={styles.textBox}>
              <h3 className={styles.madeBy}>Made by fnotorious</h3>
              <p className={styles.smallText}>@https://github.com/fnotorious</p>
            </div>
        </div>
    </div>
  )
}
