import React from 'react'
import styles from './info-page.module.css'
import Flag from 'react-flagkit'

import { Navbar } from '../navbar/navbar'

const InfoPage = React.memo((props) => {
  return (
    <div className={`${styles.canvas} ${props.darkMode ? styles.dark : ''}`}>
      <Navbar handleChange={props.handleChange} handleSelection={props.handleSelection} darkMode={props.darkMode} countryOne={props.countryOne} countryTwo={props.countryTwo}></Navbar>
      <div className={styles.mainSection}>
        <Flag country={props.countryOne.toUpperCase()} size={40} className={styles.flags} />
        <Flag country={props.countryTwo.toUpperCase()} size={40} className={styles.flags} />
      </div>
    </div>
  )
})

export default InfoPage