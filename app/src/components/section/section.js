import React, { useState, useEffect } from 'react'
import styles from './section.module.css'
import Flag from 'react-flagkit'

import NoSymbol from '../../assets/No-Symbol.svg';
import { Pointer } from '../../assets/Pointer.js';
import { Cash } from '../../assets/Cash'
import { Star } from '../../assets/Star'
import { Banner } from '../banner/banner'
import { PieChart } from '../pie-chart/pie-chart'

export const Section = React.memo((props) => {
    const [year, setYear] = useState(2020);
    const [chartData, setChartData] = useState(null);
    const [showError, setShowError] = useState(false);
    const API_KEY = '562a82ab18f844f78e5591084963c499';

    function handleYearChange(newYear) {
        const element = document.querySelectorAll('#pointer')[props.countryNum];
        let point = 5 * (newYear - 2002) + 1.3;

        if (element) {
            element.style.transition = 'left 0.5s ease-in-out';
            element.style.left = point+'%';
        }

        setYear(newYear);
    }

    useEffect(() => {
        const fetchExportData = async () => {
            if (props.data && props.data.length > 0) {
                fetch(`http://comtrade.un.org/api/get?type=C&freq=A&px=S2&ps=${year}&r=${props.data[props.countryNum].ccn3}&p=0&rg=2&cc=ALL&fmt=json&max=5000&token=${API_KEY}`)
                .then(response => response.json())
                .then(data => {
                    setChartData(data.dataset);
                    console.log(chartData);
                })
                .catch(error => {
                    console.error(error);
                    setShowError(true);
                });
            }
        };

        fetchExportData();
    }, [year, props.data, props.countryNum])

    useEffect(() => {
        if (props.selectionChange) {
            handleYearChange(2020);
        }
    }, [props.selectionChange])

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
                            {props.data[props.countryNum].currencies[Object.keys(props.data[props.countryNum].currencies)[0]].name.length > 30
                            ? props.data[props.countryNum].currencies[Object.keys(props.data[props.countryNum].currencies)[0]].name.slice(0, 30).concat("...")
                            : props.data[props.countryNum].currencies[Object.keys(props.data[props.countryNum].currencies)[0]].name}
                          </span>
                        </div>
                      )}
                    </div>
                  }
                  </div>
              </div>
            }
        </div>
        <div className={styles.bar}>
            <div className={styles.timeContainer}>
                <div className={styles.timePeriod} onClick={() => handleYearChange(2002)}>
                    <div className={styles.bigMark}></div>
                </div>
                <div className={styles.timePeriod} onClick={() => handleYearChange(2003)}>
                    <div className={styles.littleMark}></div>
                </div>
                <div className={styles.timePeriod} onClick={() => handleYearChange(2004)}>
                    <div className={styles.bigMark}></div>
                </div>
                <div className={styles.timePeriod} onClick={() => handleYearChange(2005)}>
                    <div className={styles.littleMark}></div>
                </div>
                <div className={styles.timePeriod} onClick={() => handleYearChange(2006)}>
                    <div className={styles.bigMark}></div>
                </div>
                <div className={styles.timePeriod} onClick={() => handleYearChange(2007)}>
                    <div className={styles.littleMark}></div>
                </div>
                <div className={styles.timePeriod} onClick={() => handleYearChange(2008)}>
                    <div className={styles.bigMark}></div>
                </div>
                <div className={styles.timePeriod} onClick={() => handleYearChange(2009)}>
                    <div className={styles.littleMark}></div>
                </div>
                <div className={styles.timePeriod} onClick={() => handleYearChange(2010)}>
                    <div className={styles.bigMark}></div>
                </div>
                <div className={styles.timePeriod} onClick={() => handleYearChange(2011)}>
                    <div className={styles.littleMark}></div>
                </div>
                <div className={styles.timePeriod} onClick={() => handleYearChange(2012)}>
                    <div className={styles.bigMark}></div>
                </div>
                <div className={styles.timePeriod} onClick={() => handleYearChange(2013)}>
                    <div className={styles.littleMark}></div>
                </div>
                <div className={styles.timePeriod} onClick={() => handleYearChange(2014)}>
                    <div className={styles.bigMark}></div>
                </div>
                <div className={styles.timePeriod} onClick={() => handleYearChange(2015)}>
                    <div className={styles.littleMark}></div>
                </div>
                <div className={styles.timePeriod} onClick={() => handleYearChange(2016)}>
                    <div className={styles.bigMark}></div>
                </div>
                <div className={styles.timePeriod} onClick={() => handleYearChange(2017)}>
                    <div className={styles.littleMark}></div>
                </div>
                <div className={styles.timePeriod} onClick={() => handleYearChange(2018)}>
                    <div className={styles.bigMark}></div>
                </div>
                <div className={styles.timePeriod} onClick={() => handleYearChange(2019)}>
                    <div className={styles.littleMark}></div>
                </div>
                <div className={styles.timePeriod} onClick={() => handleYearChange(2020)}>
                    <div className={styles.bigMark}></div>
                </div>
            </div>
        </div>
        <div className={styles.barForPointer}>
        <div className={styles.pointer} id="pointer">
            <p className={styles.pointerLabel}>{year}</p>
            <Pointer darkMode={props.darkMode} />
        </div>
        </div>
        <div className={styles.labels}>
            <div className={styles.year} id="2002">
                2002
            </div>
            <div className={styles.year} id="2004">
                2004
            </div>
            <div className={styles.year} id="2006">
                2006
            </div>
            <div className={styles.year} id="2008">
                2008
            </div>
            <div className={styles.year} id="2010">
                2010
            </div>
            <div className={styles.year} id="2012">
                2012
            </div>
            <div className={styles.year} id="2014">
                2014
            </div>
            <div className={styles.year} id="2016">
                2016
            </div>
            <div className={styles.year} id="2018">
                2018
            </div>
            <div className={styles.year} id="2020">
                2020
            </div>
        </div>
    </div>
  )
})

export default Section