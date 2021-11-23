import BoxCard from "../../components/box-card/BoxCard"
import MonefyChart from "../../components/chart/MonefyChart"
import Sidebar from "../../components/sidebar/Sidebar"
import './Dashboard.css'
const Dashboard = () => {
    console.log(MonefyChart)
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
                                <BoxCard title="Total Balance" type="card-body box-card-1" content="Rp 17.000.000"/>
                            </div>
                            <div className="col-md-6">
                                <BoxCard title="Graph" type="card-body box-card-2" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <BoxCard title="Total Expense" type="card-body box-card-3" content="Rp 15.000.000"/>
                            </div>
                            <div className="col-md-6">
                                <BoxCard title="Total Income" type="card-body box-card-4" content="Rp 35.090.000"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard