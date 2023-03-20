import React, { useState, useRef, useEffect } from 'react';
import styles from './pie-chart.module.css'

import Highcharts from 'highcharts';
import Highcharts3D from 'highcharts/highcharts-3d';
import HighchartsReact from 'highcharts-react-official';
import LoadingAnimation from '../loading-animation/loading-animation'

export const PieChart = React.memo((props) => {
  const [prevData, setPrevData] = useState(props.data);
  const chartRef = useRef(null);

  useEffect(() => {
    if (prevData !== props.data) {
      const chart = chartRef.current.chart;
      setPrevData(props.data);
      chart.series[0].setData(props.data);
    }
  }, [])

  function renderChart() {
    if (props.showError) {
      return <h3 className={styles.error}>Oops! No data available. Try a different year or 
      try using the app at a later time.</h3>
    }

    else if (props.data && props.data.length > 0) {
      Highcharts3D(Highcharts);

      const options = {
        credits: {
          enabled: false
        },
        chart: {
          type: 'pie',
          backgroundColor: 'transparent',
          options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
          }
        },
        colors: ['#BA8677', '#7DDAA1', '#8C7CD6', '#CCA570', '#B23D6D', '#6AD8D8', '#D81159',
                  '#F5CF23', '#6A98D8', '#D86565', '#2C6582', '#FC6D26', '#04AA6B', '#C678E7', '#34A1C7'],
        title: {
          text: null
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            size: '115%',
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
              enabled: true,
              format: '{point.name}: {point.percentage:.2f}%'
            },
          }
        },
        series: [{
          type: 'pie',
          name: 'Commodity Trade by Value: ($USD)',
          data: [
            props.data[0] ? [props.countryMode ? props.data[0].ptTitle : 'Fuels', props.countryMode ? props.data[0].TradeValue : props.data[0]] : null,
            props.data[1] ? [props.countryMode ? props.data[1].ptTitle : 'Plastic and Rubber', props.countryMode ? props.data[1].TradeValue : props.data[1]] : null,
            props.data[2] ? [props.countryMode ? props.data[2].ptTitle : 'Chemicals', props.countryMode ? props.data[2].TradeValue : props.data[2]] : null,
            props.data[3] ? [props.countryMode ? props.data[3].ptTitle : 'Transportation', props.countryMode ? props.data[3].TradeValue : props.data[3]] : null,
            props.data[4] ? [props.countryMode ? props.data[4].ptTitle : 'Metals', props.countryMode ? props.data[4].TradeValue : props.data[4]] : null,
            props.data[5] ? [props.countryMode ? props.data[5].ptTitle : 'Machinery and Electronics', props.countryMode ? props.data[5].TradeValue : props.data[5]] : null,
            props.data[6] ? [props.countryMode ? props.data[6].ptTitle : 'Stone and Glass', props.countryMode ? props.data[6].TradeValue : props.data[6]] : null,
            props.data[7] ? [props.countryMode ? props.data[7].ptTitle : 'Food', props.countryMode ? props.data[7].TradeValue : props.data[7]] : null,
            props.data[8] ? [props.countryMode ? props.data[8].ptTitle : 'Animals', props.countryMode ? props.data[8].TradeValue : props.data[8]] : null,
            props.data[9] ? [props.countryMode ? props.data[9].ptTitle : 'Wood', props.countryMode ? props.data[9].TradeValue : props.data[9]] : null,
            props.data[10] ? [props.countryMode ? props.data[10].ptTitle : 'Miscellaneous', props.countryMode ? props.data[10].TradeValue : props.data[10]] : null,
            props.data[11] ? [props.countryMode ? props.data[11].ptTitle : 'Minerals', props.countryMode ? props.data[11].TradeValue : props.data[11]] : null,
            props.data[12] ? [props.countryMode ? props.data[12].ptTitle : 'Vegetables', props.countryMode ? props.data[12].TradeValue : props.data[12]] : null,
            props.data[13] ? [props.countryMode ? props.data[13].ptTitle : 'Textiles', props.countryMode ? props.data[13].TradeValue : props.data[13]] : null,
            props.data[14] ? [props.countryMode ? props.data[14].ptTitle : 'Hides and Skins', props.countryMode ? props.data[14].TradeValue : props.data[14]] : null,
          ],
          dataLabels: {
            color: props.darkMode ? '#344493' : '#A8A8A8',
            style: {
              fontWeight: 'normal',
              textOutline: 'none',
              textShadow: 'none'
            },
          }
        }]
      };

      return <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef}/>;
    }
  }

  return (
    <div className={`${styles.canvas} ${props.darkMode ? styles.dark : ''}`}>
      <div className={styles.buttonDisplay}>
        <button className={styles.button} onClick={() => props.setByImports(props.countryNum)}>
          {props.importsMode ? 'By exports' : 'By imports'}
        </button>
        <button className={styles.button} onClick={() => props.setByCountry(props.countryNum)}>
          {props.countryMode ? 'By product' : 'By country'}
        </button>
      </div>
      <div className={styles.chartTitle}>
        {props.timeLoading ? <div className={styles.yearLoading}></div> : ''}
        <span style={{fontWeight: "1000"}}>
          {props.importsMode ? 'Import Makeup ' : 'Export Makeup '}
        </span>
        <span style={{fontWeight: "200"}}>
          {props.year}
        </span>
      </div>
      <div className={styles.pieChart}>
        {props.showLoading !== true ? renderChart() : 
          <div className={styles.loading}>
            <LoadingAnimation darkMode={props.darkMode}></LoadingAnimation>
          </div>
        }
      </div>
    </div>
  )
})

export default PieChart