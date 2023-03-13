import React, { useState, useEffect } from 'react';
import styles from './pie-chart.module.css'

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import LoadingAnimation from '../loading-animation/loading-animation'

export const PieChart = React.memo((props) => {
  return (
    <div className={styles.canvas}>
        {props.showLoading !== true ? (
        /*<HighchartsReact
            highcharts={Highcharts}
            options={{
            chart: {
                type: 'pie',
                options3d: {
                enabled: true,
                alpha: 45,
                beta: 0,
                },
            },
            series: [
                {
                name: 'Exports',
                data: props.chartData,
                },
            ],
            }}
        />*/''
        ) :
        <div className={styles.loading}>
          <LoadingAnimation darkMode={props.darkMode}></LoadingAnimation>
        </div>
        }
    </div>
  )
})

export default PieChart