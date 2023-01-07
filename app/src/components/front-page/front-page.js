import React from 'react'
import styles from './front-page.module.css'
import banner from '../../assets/homepage-design-CHRISTMAS-PNG.png'

export default function FrontPage() {
  return (
    <div className={styles.canvas}>
        <div className={styles.mainSection}>
            <div className={styles.centerBox}>
                <img src={banner} alt="BANNER" className={styles.logoBanner}></img>
                <div className={styles.logoText}>Comparing trade and economy between nations</div>
            </div>
            <div className={styles.textBox}></div>
        </div>
    </div>
  )
}
