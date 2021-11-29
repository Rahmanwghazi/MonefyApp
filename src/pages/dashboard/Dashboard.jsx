import { Messaging } from "react-cssfx-loading/lib"
import BoxCard from "../../components/box-card/BoxCard"
import Sidebar from "../../components/sidebar/Sidebar"
import SmallSidebar from "../../components/sidebar/SmallSidebar"
import { useGetSumExpense } from "../../hooks/useGetSumExpense"
import { useGetSumIncome } from "../../hooks/useGetSumIncome"
import { formatRupiah } from "../../utils/FormatterRupiah"
import './Dashboard.css'

const Dashboard = (props) => {
    const { isAuthenticated } = props.auth
    const { dataIncome, loadingIncome } = useGetSumIncome()
    const { loadingExpense, dataExpense } = useGetSumExpense()
    const formattedIncomeAmount = formatRupiah(dataIncome?.record_aggregate.aggregate.sum.amount)
    const formattedExpenseAmount = formatRupiah(dataExpense?.record_aggregate.aggregate.sum.amount)
    const balance = dataIncome?.record_aggregate.aggregate.sum.amount - dataExpense?.record_aggregate.aggregate.sum.amount
    const formattedBalance = formatRupiah(balance)

    if (isAuthenticated()) {
        return (
            <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-3 d-none d-xxl-block">
                            <Sidebar />
                        </div>
                        <div className="col-md-3 d-xxl-none">
                            <SmallSidebar />
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
                                    <BoxCard title="Total Expense" type="card-body box-card-3" content={loadingExpense ? <Messaging className="loading-animation" color="#EEEEEE" width="15px" height="15px" /> : formattedExpenseAmount} />
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
    return (
        <div className="container">
            <h4 className="text-white text-center mt-5">
                You are not logged in! Please <p style={{ cursor: 'pointer', fontWeight: "bolder" }} onClick={() => props.auth.login()}> Sign In </p> to continue.
            </h4>
        </div>
    );
}

export default Dashboard