import React from 'react'
import styles from './loading-screen.module.css'

const LoadingScreen = ({darkMode}) => {
  return (
    <div className={`${styles.loading} ${darkMode ? styles.darkWhite : ''}`}>
        
    </div>
  )
}

export default LoadingScreen