import React, { useState } from 'react'
import Moon from '../../assets/Moon.js'
import Info from '../../assets/Info.js'
import Menu from '../../assets/Menu.js'
import styles from './burger-menu.module.css'

export const BurgerMenu = ({ darkModeFunction, darkMode }) => {
    const [showMenu, setShowMenu] = useState(false);            // To capture whether to show menu box or not

    // Toggle menu box
    const handleMenu = () => {
        setShowMenu((prevShowComponent) => !prevShowComponent);
    }

    const menu = 
        <div className={`${styles.menuBox} ${darkMode ? styles.dark : ''}`}>
            <div onClick={darkModeFunction}>
                <div className={styles.options}>
                    <Moon darkMode={darkMode}></Moon>
                    <p className={styles.optionText}>Dark mode</p>
                    <div className={styles.switchBase}>
                        <div className={styles.switch}></div>
                    </div>
                </div>
            </div>
            <div className={styles.options}>
                <Info darkMode={darkMode}></Info>
                <p className={styles.optionText}>Help</p>
            </div>
            <div className={styles.options}>
                <p className={styles.optionText}>Credits</p>
            </div> 
        </div>;

    // Return menu box upon toggle
    return (
        <div>
            <div className={`${styles.menu} ${darkMode ? styles.darkMenuHover : ''}`} onClick={handleMenu}>
                <Menu darkMode={darkMode}></Menu>
            </div>
            {showMenu && menu}
        </div>
    )
}
