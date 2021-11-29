import { Chart } from "react-google-charts";
import { Messaging } from "react-cssfx-loading/lib";
import { useGetSumIncome } from "../../hooks/useGetSumIncome";
import { useGetSumExpense } from "../../hooks/useGetSumExpense";


const MonefyChart = () => {

    const { dataIncome, loadingIncome } = useGetSumIncome()
    const { loadingExpense, dataExpense } = useGetSumExpense()


    const IncomeAmount = dataIncome?.record_aggregate.aggregate.sum.amount
    const ExpenseAmount = dataExpense?.record_aggregate.aggregate.sum.amount

    if (loadingIncome || loadingExpense ){
      return(
          <Messaging style={{marginLeft:70, marginTop:80}} color="#EEEEEE" width="15px" height="15px" />
      )
    }

    return (
        <Chart
        width={'200px'}
        height={'200px'}
        chartType="BarChart"
        data={[
          ['Type','amount'],
          ['Total Income', IncomeAmount],
          ['Total Expense', ExpenseAmount],
        ]}
        options={{
          legend: 'none',
          chartArea:{width:"50%"},
          backgroundColor: '#EEEEEE',
          colors: ['#6D8A48', '#FD7014'],
          hAxis: {
            minValue: 0,
          },
          vAxis: {

          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    );
};
export default MonefyChart;