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
              ['Fuels', props.data[0]],
              ['Plastic and Rubber', props.data[1]],
              ['Chemicals', props.data[2]],
              ['Transportation', props.data[3]],
              ['Metals', props.data[4]],
              ['Machinery and Electronics', props.data[5]],
              ['Stone and Glass', props.data[6]],
              ['Food', props.data[7]],
              ['Animals', props.data[8]],
              ['Wood', props.data[9]],
              ['Miscellaneous', props.data[10]],
              ['Minerals', props.data[11]],
              ['Vegetables', props.data[12]],
              ['Textiles', props.data[13]],
              ['Hides and Skins', props.data[14]],
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