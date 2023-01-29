import React from 'react'
import styles from './loading-screen.module.css'
import { ReactComponent as Wave } from '../../assets/path.svg'
import Boat from '../../assets/Boat'

const LoadingScreen = ({darkMode}) => {
  return (
    <div className={`${styles.canvas} ${darkMode ? styles.darkWhite : ''}`}>
      <div className={styles.mainSection}>
        <div className={styles.centerBox}>
          <div className={styles.imageBox}>
            <div className={styles.boat}>
              <Boat darkMode={darkMode}></Boat>
            </div>
            <div className={styles.waves}>
              <div className={`${styles.hiddenRect} ${darkMode ? styles.darkWhite : ''}`}></div>
              <div className={styles.wave}>
                <div className={styles.waveBox}></div>
                <Wave></Wave>
              </div>
              <div className={`${styles.wave} ${styles.wave2}`}>
                <div className={styles.waveBox}></div>
                <Wave></Wave>
              </div>
              <div className={`${styles.wave} ${styles.wave3}`}>
                <div className={styles.waveBox}></div>
                <Wave></Wave>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen