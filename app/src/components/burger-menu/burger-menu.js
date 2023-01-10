import React, { useState } from 'react'
import Menu from '../../assets/Menu.svg'
import Moon from '../../assets/moon.svg'
import Info from '../../assets/information-circle.svg'
import styles from './burger-menu.module.css'

export const BurgerMenu = () => {
    const menu = 
    <div className={styles.menuBox}>
        <p className={styles.options}>
            <img className={styles.icon} alt="moon" src={Moon}></img>Dark mode<div className={styles.switchBase}></div></p>
        <p className={styles.options}><img className={styles.icon} alt="info" src={Info}></img>Help</p>
        <p className={styles.options}>Credits</p>
    </div>;

    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {
        setShowMenu((prevShowComponent) => !prevShowComponent);
    }

    return (
        <div>
            <div className={styles.menu} onClick={handleMenu}>
                <img src={Menu} alt="MENU"></img>
            </div>
            {showMenu && menu}
        </div>
    )
}
