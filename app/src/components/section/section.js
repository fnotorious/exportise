import React from 'react'
import styles from './section.module.css'
import Flag from 'react-flagkit'

import NoSymbol from '../../assets/No-Symbol.svg';
import { Cash } from '../../assets/Cash'
import { Star } from '../../assets/Star'
import { Banner } from '../banner/banner'

export const Section = React.memo((props) => {
  return (
    <div className={`${styles.section} ${props.darkMode ? styles.dark : ''}`}>
        <Banner country={props.country} countryNum={props.countryNum} darkMode={props.darkMode} dataLoaded={props.dataLoaded} showLoading={props.showLoading} isOnline={props.isOnline} selectionChange={props.selectionChange} data={props.data}></Banner>
        <div className={styles.flagDisplay}>
          <div className={styles.flagPlacement}></div>
            {props.isOnline === false ? <img className={styles.error} src={NoSymbol} alt="NO"></img> :
                props.showLoading ? <div className={styles.flagLoader}></div> :
                    <Flag country={props.country.toUpperCase()} size={185} className={`${props.selectionChange ? styles.fadeIn : ''} ${styles.flags}`} />}
          </div>
          <div className={styles.capAndCurr}>
            {props.dataLoaded === false || props.showLoading ? <div className={styles.capAndCurrLoader}></div> :
              <div className={styles.capital}>
                <Star darkMode={props.darkMode}></Star>
                <div className={styles.text}>
                  {props.dataLoaded === false || props.showLoading ? <div className={styles.capAndCurrLoader}></div> :
                    <div>
                      <span style={{fontWeight: "1000"}}>Capital: </span>
                      {props.data && props.data.length > 0 && (
                        <span style={{fontWeight: "200"}}>
                          {props.data[props.countryNum].capital[0].length > 13
                          ? props.data[props.countryNum].capital[0].slice(0, 13).concat("...")
                          : props.data[props.countryNum].capital[0]}
                        </span>
                      )}
                    </div>
                  }
                </div>
              </div>
            }
            {props.dataLoaded === false || props.showLoading ? <div className={styles.capAndCurrLoader}></div> :
              <div className={styles.currency}>
                <Cash darkMode={props.darkMode}></Cash>
                <div className={styles.text}>
                  {props.dataLoaded === false || props.showLoading ? <div className={styles.capAndCurrLoader}></div> :
                    <div>
                      {props.data && props.data.length > 0 && (
                        <div>
                          <span style={{fontWeight: "1000"}}>Currency: </span>
                          <span style={{fontWeight: "200"}}>
                            {props.data[props.countryNum].currencies[Object.keys(props.data[props.countryNum].currencies)[0]].name + " "}
                          </span>
                        </div>
                      )}
                    </div>
                  }
                  </div>
              </div>
            }
        </div>
    </div>
  )
})

export default Section