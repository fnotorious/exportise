import React from 'react'
import styles from './front-page.module.css'
import banner from '../../assets/homepage-design-CHRISTMAS-PNG.png'

import { DropdownMenu } from '../dropdown/dropdown'

export default function FrontPage() {
  return (
    <div className={styles.canvas}>
        <div className={styles.mainSection}>
            <div className={styles.centerBox}>
                <img src={banner} alt="BANNER" className={styles.logoBanner}></img>
                <div className={styles.logoText}>Comparing trade and economy between nations</div>
                <div className={styles.inputSection}>
                  <div className={styles.menuOne}>
                    <DropdownMenu></DropdownMenu>
                  </div>
                  <div className={styles.inputTextSection}>
                    <h2 className={styles.letsCompare}>Let's compare:</h2>
                    <h3 className={styles.and}>and...</h3>
                  </div>
                  <div className={styles.menuTwo}>
                    <DropdownMenu></DropdownMenu>
                  </div>
                </div>
            </div>
            <div className={styles.textBox}>
              <h3 className={styles.madeBy}>Made by fnotorious</h3>
              <p className={styles.link}>@https://github.com/fnotorious</p>
            </div>
        </div>
    </div>
  )
}
