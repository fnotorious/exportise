import React, { useState } from 'react'
import styles from './recent.module.css'

import { Arrow } from '../../assets/Arrow'
import { Clock } from '../../assets/Clock'
import Flag from 'react-flagkit'

export const Recent = React.memo((props) => {
    const [showMenu, setShowMenu] = useState(false);            // To capture whether to show menu box or not

    // Toggle menu box
    const handleMenu = () => {
        setShowMenu((prevShowComponent) => !prevShowComponent);
    }

    const menu = 
        <div className={`${styles.menuBox} ${props.darkMode ? styles.darkMenuBox : ''}`}>
            {props.array[0][0] === "" ? <div className={styles.empty}>No recents</div> : 
                <div className={styles.buttons}>
                    <div className={styles.option}>
                        <div className={styles.optionText}>
                            <div className={styles.optionText}>
                                {props.array[0][0].toUpperCase()}
                            </div>
                            <div className={styles.flagPlacement}>
                                <Flag country={props.array[0][0].toUpperCase()} size={40} className={styles.flags} />
                            </div>
                            <div className={styles.flagPlacement}>
                                <Flag country={props.array[0][1].toUpperCase()} size={40} className={styles.flags} />
                            </div>
                            <div className={styles.optionText}>
                                {props.array[0][1].toUpperCase()}
                            </div>
                        </div>
                    </div>
                    {props.array[1][0] === "" ? '' :  
                    <div className={styles.option}>
                        <div className={styles.optionText}>
                            <div className={styles.optionText}>
                                {props.array[1][0].toUpperCase()}
                            </div>
                            <div className={styles.flagPlacement}>
                                <Flag country={props.array[1][0].toUpperCase()} size={40} className={styles.flags} />
                            </div>
                            <div className={styles.flagPlacement}>
                                <Flag country={props.array[1][1].toUpperCase()} size={40} className={styles.flags} />
                            </div>
                            <div className={styles.optionText}>
                                {props.array[1][1].toUpperCase()}
                            </div>
                        </div>
                    </div>
                    }
                    {props.array[2][0] === "" ? '' :  
                    <div className={styles.option}>
                        <div className={styles.optionText}>
                            <div className={styles.optionText}>
                                {props.array[2][0].toUpperCase()}
                            </div>
                            <div className={styles.flagPlacement}>
                                <Flag country={props.array[2][0].toUpperCase()} size={40} className={styles.flags} />
                            </div>
                            <div className={styles.flagPlacement}>
                                <Flag country={props.array[2][1].toUpperCase()} size={40} className={styles.flags} />
                            </div>
                            <div className={styles.optionText}>
                                {props.array[2][1].toUpperCase()}
                            </div>
                        </div>
                    </div> 
                    }
                </div>
            }

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