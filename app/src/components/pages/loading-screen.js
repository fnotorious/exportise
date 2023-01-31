import React from 'react'
import styles from './loading-screen.module.css'
import { ReactComponent as Wave } from '../../assets/path.svg'
import Boat from '../../assets/Boat'
import Button from '../button/button'

const LoadingScreen = ({darkMode}) => {
  return (
    <div className={`${styles.canvas} ${darkMode ? styles.dark : ''}`}>
      <div className={styles.mainSection}>
        <div className={styles.centerBox}>
          <div className={styles.contentDisplay}>
            <div className={styles.imageBox}>
              <div className={styles.boat}>
                <Boat darkMode={darkMode}></Boat>
              </div>
              <div className={styles.waves}>
                <div className={styles.hiddenRect}></div>
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
            <h2 className={styles.loading}>Loading</h2>
          </div>
          <div className={styles.buttonPlacement}>
            <Button name="Cancel" navigateTo='/'></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen