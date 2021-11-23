import * as React from "react";
import { Chart } from "react-google-charts";


const MonefyChart = (props) => {
    return (
        <Chart
        width={'200px'}
        height={'200px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Type', 'amount'],
          ['Total Balance', 17000000],
          ['Total Income', 35090000],
          ['Total Expense', 15090000],
        ]}
        options={{
          legend: 'none',
          pieSliceText: 'label',
          pieStartAngle: 100,
          chartArea:{width:"100%",height:"100%"},
          backgroundColor: 'transparent',
          colors: ['#3164B6', '#6D8A48', '#FD7014']
        }}
        rootProps={{ 'data-testid': '3' }}
      />
    );
};
export default MonefyChart;