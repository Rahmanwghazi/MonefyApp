import { Chart } from "react-google-charts";
import { useQuery } from "@apollo/client"
import { GetSumExpenseRecord, GetSumIncomeRecord } from "../../graphql/Queries";
import { Messaging } from "react-cssfx-loading/lib";


const MonefyChart = (props) => {
  const { loading: loadingIncome, data: dataIncome } = useQuery(GetSumIncomeRecord)
    const { loading: loadingExpense, data: dataExpense } = useQuery(GetSumExpenseRecord)


    const IncomeAmount = dataIncome?.records_aggregate.aggregate.sum.amount
    const ExpenseAmount = dataExpense?.records_aggregate.aggregate.sum.amount

    if (loadingIncome || loadingExpense ){
      return(
          <Messaging style={{marginLeft:70, marginTop:80}} color="#EEEEEE" width="15px" height="15px" />
      )
    }

    return (
        <Chart
        width={'200px'}
        height={'200px'}
        chartType="PieChart"
        data={[
          ['Type','amount'],
          ['Total Income', IncomeAmount],
          ['Total Expense', ExpenseAmount],
        ]}
        options={{
          legend: 'none',
          pieSliceText: 'label',
          pieStartAngle: 100,
          chartArea:{width:"100%",height:"100%"},
          backgroundColor: 'transparent',
          colors: ['#6D8A48', '#FD7014']
        }}
        rootProps={{ 'data-testid': '3' }}
      />
    );
};
export default MonefyChart;