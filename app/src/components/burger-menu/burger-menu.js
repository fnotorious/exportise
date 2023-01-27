import React, { useState } from 'react'
import Moon from '../../assets/Moon.js'
import Info from '../../assets/Info.js'
import Menu from '../../assets/Menu.js'
import styles from './burger-menu.module.css'

export const BurgerMenu = ({ darkMode }) => {
    const [darkSwitch, setDarkSwitch] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {
        setShowMenu((prevShowComponent) => !prevShowComponent);
    }

    const toggleDarkMode = () => {
        setDarkSwitch((prevDarkSetting) => !prevDarkSetting);
    };

    const menu = 
        <div className={`${styles.menuBox} ${darkSwitch ? styles.darkMenuBox : ''}`}>
            <div onClick={darkMode}>
                <div className={`${styles.options} ${darkSwitch ? styles.darkGray : ''}`} onClick={() => {toggleDarkMode();}}>
                    <Moon darkMode={darkSwitch}></Moon>
                    <p className={styles.optionText}>Dark mode</p>
                    <div className={`${styles.switchBase} ${darkSwitch ? styles.darkOn : styles.darkOff}`}>
                        <div className={`${styles.switch} ${darkSwitch ? styles.switchOn : ''}`}></div>
                    </div>
                </div>
            </div>
            <div className={`${styles.options} ${darkSwitch ? styles.darkGray : ''}`}>
                <Info darkMode={darkSwitch}></Info>
                <p className={styles.optionText}>Help</p>
            </div>
            <div className={`${styles.options} ${darkSwitch ? styles.darkGray : ''}`}>
                <p className={styles.optionText}>Credits</p>
            </div> 
        </div>;

    return (
        <div>
            <div className={`${styles.menu} ${darkSwitch ? styles.menuDark : ''}`} onClick={handleMenu}>
                <Menu darkMode={darkSwitch}></Menu>
            </div>
            {showMenu && menu}
        </div>
    )
}
