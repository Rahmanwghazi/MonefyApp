import { Messaging } from "react-cssfx-loading/lib"
import BoxCard from "../../components/box-card/BoxCard"
import Sidebar from "../../components/sidebar/Sidebar"
import { useGetSumExpense } from "../../hooks/useGetSumExpense"
import { useGetSumIncome } from "../../hooks/useGetSumIncome"
import { formatRupiah } from "../../utils/FormatterRupiah"
import './Dashboard.css'

const Dashboard = () => {
    const { dataIncome, loadingIncome } = useGetSumIncome()
    const { loadingExpense, dataExpense } = useGetSumExpense()
    const formattedIncomeAmount = formatRupiah(dataIncome?.records_aggregate.aggregate.sum.amount)
    const formattedExpenseAmount = formatRupiah(dataExpense?.records_aggregate.aggregate.sum.amount)
    const balance = dataIncome?.records_aggregate.aggregate.sum.amount - dataExpense?.records_aggregate.aggregate.sum.amount
    const formattedBalance = formatRupiah(balance)

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div className="title-page">
                            <p>Dashboard</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <BoxCard title="Total Balance" type="card-body box-card-1" content={loadingIncome || loadingExpense ? <Messaging className="loading-animation" color="#EEEEEE" width="15px" height="15px" /> : formattedBalance} />
                            </div>
                            <div className="col-md-6">
                                <BoxCard title="Graph" type="card-body box-card-2" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <BoxCard title="Total Expense" type="card-body box-card-3" content={ loadingExpense ? <Messaging className="loading-animation" color="#EEEEEE" width="15px" height="15px" /> : formattedExpenseAmount} />
                            </div>
                            <div className="col-md-6">
                                <BoxCard title="Total Income" type="card-body box-card-4" content={loadingIncome ? <Messaging className="loading-animation" color="#EEEEEE" width="15px" height="15px" /> : formattedIncomeAmount} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard