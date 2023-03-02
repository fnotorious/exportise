import React, { useState, useEffect, useRef } from 'react'
import styles from './recent.module.css'

import { Arrow } from '../../assets/Arrow'
import { Clock } from '../../assets/Clock'
import Flag from 'react-flagkit'

export const Recent = React.memo((props) => {
    const [showMenu, setShowMenu] = useState(false);            // To capture whether to show menu box or not
    const prevArrayRef = useRef(props.array);
    const [arrayHasChanged, setArrayHasChanged] = useState(true);

    // Toggle menu box
    const handleMenu = () => {
        setShowMenu((prevShowComponent) => !prevShowComponent);
    }

    useEffect(() => {
        if (prevArrayRef.current !== props.array) {
          setArrayHasChanged(false);
          prevArrayRef.current = props.array;
        }
      }, [props.array]);

      useEffect(() => {
        if (arrayHasChanged === false) {
          const timer = setTimeout(() => {
            setArrayHasChanged(true);
          }, 800);
          return () => clearTimeout(timer);
        }
      }, [arrayHasChanged]);

    const renderFlags = (paramOne, paramTwo) => {
        return (
        <div className={styles.option} onClick={() => props.handleSelection(paramOne, paramTwo)}>
            <div className={styles.optionContent}>
                <div className={styles.countryText}>
                    {paramOne.toUpperCase()}
                </div>
                <div className={styles.flagPlacement}>
                    <Flag country={paramOne.toUpperCase()} size={40} className={`${styles.flags}`} />
                </div>
                <div className={styles.flagPlacement}>
                    <Flag country={paramTwo.toUpperCase()} size={40} className={`${styles.flags}`} />
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
                <div className={styles.option} onClick={() => props.handleSelection(props.array[0][0].toUpperCase(), props.array[0][1].toUpperCase())}>
                    <div className={styles.optionContent}>
                        <div className={styles.countryText}>
                            {props.array[0][0].toUpperCase()}
                        </div>
                        <div className={styles.flagPlacement}>
                            <Flag country={props.array[0][0].toUpperCase()} size={40} className={`${styles.flags} ${arrayHasChanged ? styles.fadeIn : ''}`} />
                        </div>
                        <div className={styles.flagPlacement}>
                            <Flag country={props.array[0][1].toUpperCase()} size={40} className={`${styles.flags} ${arrayHasChanged ? styles.fadeIn : ''}`} />
                        </div>
                        <div className={styles.countryText}>
                            {props.array[0][1].toUpperCase()}
                        </div>
                    </div>
                </div>
                {props.array[1][0] === "" ? '' : renderFlags(props.array[1][0], props.array[1][1])}
                {props.array[2][0] === "" ? '' : renderFlags(props.array[2][0], props.array[2][1])}
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