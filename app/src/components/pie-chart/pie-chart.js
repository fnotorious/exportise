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
    if (props.data && props.data.length > 1) {
      Highcharts3D(Highcharts);
    
      if (props.countryMode) {
        // ADD COUNTRYMODE FEATURE
      }

      else {
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
          colors: ['#B23D6D', '#7DDAA1', '#F5CF23', '#CCA570', '#BA8677', '#D86565', '#C270D8', '#8C7CD6', '#6A98D8', '#6AD8D8', '#2C6582'],
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
              brightness: props.darkMode ? 0.8 : 1.0,
              saturation: props.darkMode ? 0.8 : 1.0,
            }
          },
          series: [{
            type: 'pie',
            name: 'Commodity Trade by Value ($USD)',
            data: [
              ['Textiles', props.data[0]],
              ['Ores and Minerals', props.data[1]],
              ['Manufactures', props.data[2]],
              ['Machinery', props.data[3]],
              ['Fuel', props.data[4]],
              ['Food', props.data[5]],
              ['Chemicals', props.data[6]],
              ['Agricultural Raw Materials', props.data[7]],
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
  }

  return (
    <div className={`${styles.canvas} ${props.darkMode ? styles.dark : ''}`}>
      <div className={styles.buttonDisplay}>
        <button className={styles.button} onClick={() => props.setByImports(props.countryNum)}>
          {props.importsMode ? 'By exports' : 'By imports'}
        </button>
        <button className={styles.button}>
          {props.countryMode ? 'By product' : 'By country'}
        </button>
      </div>
      <div className={styles.chartTitle}>
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