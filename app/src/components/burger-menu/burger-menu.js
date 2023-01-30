import React, { useState } from 'react'
import Moon from '../../assets/Moon.js'
import Info from '../../assets/Info.js'
import Menu from '../../assets/Menu.js'
import styles from './burger-menu.module.css'

export const BurgerMenu = ({ darkMode }) => {
    const [darkSwitch, setDarkSwitch] = useState(false);        // To capture switch to dark mode
    const [showMenu, setShowMenu] = useState(false);            // To capture whether to show menu box or not

    // Toggle menu box
    const handleMenu = () => {
        setShowMenu((prevShowComponent) => !prevShowComponent);
    }

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkSwitch((prevDarkSetting) => !prevDarkSetting);
    };

    const menu = 
        <div className={`${styles.menuBox} ${darkSwitch ? styles.dark : ''}`}>
            <div onClick={darkMode}>
                <div className={styles.options} onClick={() => {toggleDarkMode();}}>
                    <Moon darkMode={darkSwitch}></Moon>
                    <p className={styles.optionText}>Dark mode</p>
                    <div className={styles.switchBase}>
                        <div className={styles.switch}></div>
                    </div>
                </div>
            </div>
            <div className={styles.options}>
                <Info darkMode={darkSwitch}></Info>
                <p className={styles.optionText}>Help</p>
            </div>
            <div className={styles.options}>
                <p className={styles.optionText}>Credits</p>
            </div> 
        </div>;

    // Return menu box upon toggle
    return (
        <div>
            <div className={styles.menu} onClick={handleMenu}>
                <Menu darkMode={darkSwitch}></Menu>
            </div>
            {showMenu && menu}
        </div>
    )
}
