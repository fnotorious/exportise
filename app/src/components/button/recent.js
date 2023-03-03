import React, { useState, useEffect } from 'react'
import styles from './recent.module.css'

import { Arrow } from '../../assets/Arrow'
import { Clock } from '../../assets/Clock'
import NoSymbol from '../../assets/No-Symbol.svg';
import Flag from 'react-flagkit'

export const Recent = React.memo((props) => {
    const [showMenu, setShowMenu] = useState(false);                    // To capture whether to show menu box or not
    const [arrayHasChanged, setArrayHasChanged] = useState(true);
    const [prevArray, setPrevArray] = useState(props.array);
    const [showLoading, setShowLoading] = useState(false);
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        window.addEventListener("online", () => setIsOnline(true));
        window.addEventListener("offline", () => setIsOnline(false));

        return () => {
        window.removeEventListener("online", () => setIsOnline(true));
        window.removeEventListener("offline", () => setIsOnline(false));
        };
    }, []);

    // Toggle menu box
    const handleMenu = () => {
        setShowMenu((prevShowComponent) => !prevShowComponent);
    }

    useEffect(() => {
        if (prevArray !== props.array) {
          setArrayHasChanged(false);
          setPrevArray(props.array);
        }
      }, [prevArray, props.array]);

      useEffect(() => {
        if (arrayHasChanged === false) {
          setShowLoading(true);  
          const timer = setTimeout(() => {
            setArrayHasChanged(true);
            setShowLoading(false);
          }, 800);
          return () => clearTimeout(timer);
        }
      }, [arrayHasChanged]);

    const renderFlags = (paramOne, paramTwo, flag) => {
        return (
        <div className={styles.option} onClick={() => props.handleSelection(paramOne, paramTwo)}>
            <div className={styles.optionContent}>
                <div className={styles.countryText}>
                    {paramOne.toUpperCase()}
                </div>
                <div className={styles.flagPlacement}>
                    {isOnline === false ? <img src={NoSymbol} alt="NO"></img> : 
                        showLoading && flag === 1 ? <div className={styles.loader}></div> :
                            <Flag country={paramOne.toUpperCase()} size={40} className={`${flag === 1 ? `${arrayHasChanged ? styles.fadeIn : ''}` : ''} ${styles.flags}`} />}
                </div>
                <div className={styles.flagPlacement}>
                    {isOnline === false ? <img src={NoSymbol} alt="NO"></img> :
                        showLoading && flag === 1 ? <div className={styles.loader}></div> :
                            <Flag country={paramTwo.toUpperCase()} size={40} className={`${flag === 1 ? `${arrayHasChanged ? styles.fadeIn : ''}` : ''} ${styles.flags}`} />}
                </div>
                <div className={styles.countryText}>
                    {paramTwo.toUpperCase()}
                </div>
            </div>
        </div>
        );
    }

    const menu = 
        <div className={`${styles.menuBox} ${props.darkMode ? styles.darkMenuBox : ''}`}>
            <div className={styles.buttons}>
                {renderFlags(props.array[0][0], props.array[0][1], 1)}
                {props.array[1][0] === "" ? '' : renderFlags(props.array[1][0], props.array[1][1], 0)}
                {props.array[2][0] === "" ? '' : renderFlags(props.array[2][0], props.array[2][1], 0)}
            </div>
        </div>;

    return (
        <div>
            <button className={`${styles.recents} ${props.darkMode ? styles.dark : ''}`} onClick={handleMenu}>
                <div className={styles.clock}>
                    <Clock darkMode={props.darkMode}></Clock>
                </div>
                Recents
                <div className={styles.arrow}>
                    <Arrow darkMode={props.darkMode}></Arrow>
                </div>
            </button>
            {showMenu && menu}
        </div>
    )
})

export default Recent