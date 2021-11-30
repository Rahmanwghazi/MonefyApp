import { Messaging } from 'react-cssfx-loading/lib'
import BoxCard from '../../components/box-card/BoxCard'
import Sidebar from '../../components/sidebar/Sidebar'
import SmallSidebar from '../../components/sidebar/SmallSidebar'
import { useGetAverageIncome } from '../../hooks/useGetAvgIncome'
import { formatRupiah } from '../../utils/FormatterRupiah'
import './Recommendation.css'

const Recommendation = (props) => {
    const { isAuthenticated } = props.auth
    const { loadingGetAverageIncome, dataGetAverageIncome } = useGetAverageIncome()
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
                            <div className="title-page row">
                                <div className="col" style={{ marginBottom: "-15px" }}>
                                    <p>Recommendation</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <BoxCard title="rule" type="card-body box-card-1" content="50/30/20 rule" avg={loadingGetAverageIncome
                                        ? <Messaging className="loading-animation" color="#EEEEEE" width="15px" height="15px" />
                                        : "your average monthly income: " + formatRupiah(dataGetAverageIncome?.user.map(item => (item.avg_income)))} />
                                </div>
                                <div className="col-md-6">
                                    <BoxCard title="Needs (50%)" type="card-body box-card-2" content={loadingGetAverageIncome
                                     ? <Messaging className="loading-animation" color="#EEEEEE" width="15px" height="15px" />
                                        : formatRupiah((50 / 100) * dataGetAverageIncome?.user.map(item => (item.avg_income)))} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <BoxCard title="Wants (30%)" type="card-body box-card-3" content={loadingGetAverageIncome
                                     ? <Messaging className="loading-animation" color="#EEEEEE" width="15px" height="15px" />
                                        : formatRupiah((30 / 100) * dataGetAverageIncome?.user.map(item => (item.avg_income)))} />
                                </div>
                                <div className="col-md-6">
                                    <BoxCard title="Savings (20%)" type="card-body box-card-4" content={loadingGetAverageIncome
                                     ? <Messaging className="loading-animation" color="#EEEEEE" width="15px" height="15px" />
                                        : formatRupiah((20 / 100) * dataGetAverageIncome?.user.map(item => (item.avg_income)))} />
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

export default Recommendation