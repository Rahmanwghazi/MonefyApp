import { Chart } from "react-google-charts";
import { Messaging } from "react-cssfx-loading/lib";
import { useGetSumIncome } from "../../hooks/useGetSumIncome";
import { useGetSumExpense } from "../../hooks/useGetSumExpense";


const MonefyChart = () => {

  const { dataIncome, loadingIncome } = useGetSumIncome()
  const { loadingExpense, dataExpense } = useGetSumExpense()


  let IncomeAmount = dataIncome?.record_aggregate.aggregate.sum.amount
  let ExpenseAmount = dataExpense?.record_aggregate.aggregate.sum.amount

  if (loadingIncome || loadingExpense) {
    return (
      <Messaging style={{ marginLeft: 70, marginTop: 80 }} color="#EEEEEE" width="15px" height="15px" />
    )
  }

  if (IncomeAmount === null) {
    IncomeAmount = 0
  }

  if (ExpenseAmount === null) {
    ExpenseAmount = 0
  }

  return (
    <Chart
      width={'200px'}
      height={'200px'}
      chartType="BarChart"
      data={[
        ['Type', 'amount'],
        ['Total Income', IncomeAmount],
        ['Total Expense', ExpenseAmount],
      ]}
      options={{
        legend: 'none',
        chartArea: { width: "50%" },
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