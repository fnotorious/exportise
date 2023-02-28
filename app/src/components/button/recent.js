import React, { useState } from 'react'
import styles from './recent.module.css'

import { Arrow } from '../../assets/Arrow'
import { Clock } from '../../assets/Clock'

export const Recent = ({darkMode}) => {
    const [showMenu, setShowMenu] = useState(false);            // To capture whether to show menu box or not

    // Toggle menu box
    const handleMenu = () => {
        setShowMenu((prevShowComponent) => !prevShowComponent);
    }

    const menu = 
        <div className={`${styles.menuBox} ${darkMode ? styles.darkMenuBox : ''}`}>
            
        </div>;


    return (
        <div>
            <button className={`${styles.recents} ${darkMode ? styles.dark : ''}`} onClick={handleMenu}>
                <div className={styles.clock}>
                    <Clock darkMode={darkMode}></Clock>
                </div>
                Recents
                <div className={styles.arrow}>
                    <Arrow darkMode={darkMode}></Arrow>
                </div>
            </button>
            {showMenu && menu}
        </div>
    )
}

export default Recent