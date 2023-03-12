import React from 'react'
import styles from './loading-animation.module.css'
import { ReactComponent as Wave } from '../../assets/path.svg'
import Boat from '../../assets/Boat'

const LoadingAnimation = ({darkMode}) => {
  return (
    <div>
        <div className={`${styles.imageBox} ${darkMode ? styles.dark : ''}`}>
            <div className={styles.boat}>
                <Boat darkMode={darkMode}></Boat>
            </div>
            <div className={styles.waves}>
                <div className={styles.hiddenWave}></div>
                <div className={styles.hiddenRect}></div>
                <div className={styles.wave}>
                    <div className={`${styles.waveBox} ${styles.animOne}`}></div>
                    <Wave></Wave>
                </div>
                <div className={`${styles.wave} ${styles.wave2}`}>
                    <div className={`${styles.waveBox} ${styles.animTwo}`}></div>
                    <Wave></Wave>
                </div>
                <div className={`${styles.wave} ${styles.wave3}`}>
                    <div className={`${styles.waveBox} ${styles.animOne}`}></div>
                    <Wave></Wave>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoadingAnimation