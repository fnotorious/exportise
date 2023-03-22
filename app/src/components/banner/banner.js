import React from 'react'
import styles from './banner.module.css'

export const Banner = React.memo((props) => {
  return (
    <div className={`${styles.banner} ${props.darkMode ? styles.dark : ''}`}>
        {props.isOnline === false ? <h3>No connection</h3> : 
            props.showLoading ? <div className={styles.loader}></div> : 
                <img className={`${props.selectionChange ? styles.fadeIn : ''} ${styles.image}`} src={`https://cdn.jsdelivr.net/gh/fnotorious/exportecon-banners/${props.country}.png`} alt=""></img>}
            {props.showLoading === false ? <div className={styles.shadow}></div> : ''}
            <div className={styles.names}>
                <div className={styles.nameDisplay}>
                    {(!(props.data && props.data.length > 0) && !props.dataLoaded) || props.isOnline === false ? <div className={styles.nameLoader}></div> : <p className={styles.name}>{props.data[props.countryNum].name.common}</p>}
                </div>
                <div className={styles.nativeNameDisplay}>
                    {(!(props.data && props.data.length > 0) && !props.dataLoaded) || props.isOnline === false ? <div className={styles.nativeNameLoader}></div> : 
                    (<p className={styles.nativeName}>{props.data && props.data.length > 0 ? props.data[props.countryNum].name.nativeName[Object.keys(props.data[props.countryNum].name.nativeName)[props.country === 'il' ? 1 : 0]].common : ''}</p>)}
                </div>
        </div>
    </div>
  )
})

export default Banner