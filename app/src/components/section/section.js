import React, { useState, useEffect } from 'react'
import styles from './section.module.css'
import Flag from 'react-flagkit'

import NoSymbol from '../../assets/No-Symbol.svg';
import { Pointer } from '../../assets/Pointer.js';
import { Cash } from '../../assets/Cash'
import { Star } from '../../assets/Star'
import { Banner } from '../banner/banner'
import { PieChart } from '../pie-chart/pie-chart'

const getData = (props, comCodes) => {
    let totalTradeValue = 0;
    
    if (props.chartData && props.chartData.length > 0 && props.showError === false) {
        if (props.countryMode) {
            const filteredData = props.chartData[props.countryNum]
            .filter((item) => item.ptTitle !== 'World')
            .sort((a, b) => b.TradeValue - a.TradeValue) 
            .slice(0, 15); 
    
            return filteredData;
        }

        else {
            const filteredData = props.chartData[props.countryNum].filter((item) => {
                return comCodes.includes(item.cmdCode);
            });
    
            filteredData.forEach(item => {
                totalTradeValue += parseInt(item.TradeValue);
            });
    
            return totalTradeValue;
        }
    }
}

export const Section = React.memo((props) => {
    const [wantedData, setWantedData] = useState(null);

    useEffect(() => {
        if (props.countryMode) {
            const data = getData(props);
            setWantedData(data);
        }

        else {
            const fuels = getData(props, ["27"]);
            const plasticOrRubber = getData(props, ["39","40"]);
            const chemicals = getData(props, ["28","29","30","31","32","33","34","35","36","37","38"]);
            const transportation = getData(props, ["86","87","88","89"]);
            const metals = getData(props, ["72","73","74","75","76","78","79","80","81","82","83"]);
            const macAndElec = getData(props, ["84","85"]);
            const stoneAndGlass = getData(props, ["68","69","70","71"]);
            const food = getData(props, ["16","17","18","19","20","21","22","23","24"]);
            const animals = getData(props, ["01","02","03","04","05"]);
            const wood = getData(props, ["44","45","46","47","48","49"]);
            const miscellaneous = getData(props, ["90","91","92","93","94","95","96","97","98","99"]);
            const minerals = getData(props, ["25","26"]);
            const vegetables = getData(props, ["06","07","08","09","10","11","12","13","14","15"]);
            const textiles = getData(props, ["50","51","52","53","54","55","56","57","58","59","60","61","62","63"]);
            const hidesAndSkins = getData(props, ["41","42","43"])


            setWantedData([fuels, plasticOrRubber, chemicals, transportation, metals, macAndElec, stoneAndGlass, food
                            , animals, wood, miscellaneous, minerals, vegetables, textiles, hidesAndSkins]);
        }
    }, [props])

    const handleYearChange = (newYear) => {
        const element = document.querySelectorAll('#pointer')[props.countryNum];
        let point = 5 * (newYear - 2002) + 1.3;

        if (element) {
            element.style.transition = 'left 0.5s ease-in-out';
            element.style.left = point+'%';
        }

        props.setNewYear(newYear, props.countryNum);
    }

    useEffect(() => {
        if (props.selectionChange) {
            handleYearChange(props.year);
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
                            {props.data[props.countryNum].currencies[Object.keys(props.data[props.countryNum].currencies)[0]].name.length > 20
                            ? props.data[props.countryNum].currencies[Object.keys(props.data[props.countryNum].currencies)[0]].name.slice(0, 20).concat("...")
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
            <p className={styles.pointerLabel}>{props.year}</p>
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
        <PieChart timeLoading={props.timeLoading} year={props.year} countryNum={props.countryNum} setByImports={props.setByImports} setByCountry={props.setByCountry} importsMode={props.importsMode} countryMode={props.countryMode} data={wantedData} darkMode={props.darkMode} showLoading={props.chartLoading} showError={props.showError}></PieChart>
    </div>
  )
})

export default Section