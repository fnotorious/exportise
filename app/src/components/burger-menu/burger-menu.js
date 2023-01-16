import React, { useState } from 'react'
import Menu from '../../assets/Menu.svg'
import Moon from '../../assets/moon.svg'
import Info from '../../assets/information-circle.svg'
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
        <div className={styles.menuBox}>
            <div onClick={darkMode}>
                <div className={styles.options} onClick={() => {toggleDarkMode();}}>
                    <p>
                        <img className={styles.icon} alt="moon" src={Moon}></img>
                        Dark mode
                    </p>
                    <div className={`${styles.switchBase} ${darkSwitch ? styles.darkOn : styles.darkOff}`}>
                        <div className={`${styles.switch} ${darkSwitch ? styles.switchOn : ''}`}></div>
                    </div>
                </div>
            </div>
            <p className={styles.options}><img className={styles.icon} alt="info" src={Info}></img>Help</p>
            <p className={styles.options}>Credits</p>
        </div>;

    return (
        <div>
            <div className={styles.menu} onClick={handleMenu}>
                <img src={Menu} alt="MENU"></img>
            </div>
            {showMenu && menu}
        </div>
    )
}
