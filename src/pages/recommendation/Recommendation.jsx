import BoxCard from '../../components/box-card/BoxCard'
import Sidebar from '../../components/sidebar/Sidebar'
import './Recommendation.css'

const Recommendation = () => {
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div className="title-page">
                            <p>Recommendation</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <BoxCard type="card-body box-card-1" content="50/30/20 rule"/>
                            </div>
                            <div className="col-md-6">
                                <BoxCard title="Needs (50%)" type="card-body box-card-2" content="Rp 25.000.000"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <BoxCard title="Wants (30%)" type="card-body box-card-3" content="Rp 15.000.000"/>
                            </div>
                            <div className="col-md-6">
                                <BoxCard title="Savings (20%)" type="card-body box-card-4" content="Rp 10.000.000" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
        
    )
}

export default Recommendation