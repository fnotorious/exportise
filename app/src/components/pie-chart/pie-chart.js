import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const PieChart = React.memo((props) => {
  return (
    <div>
        {props.chartData && props.chartData.length > 0 && (
        <HighchartsReact
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
        />
        )}
    </div>
  )
})

export default PieChart