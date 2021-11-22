import OutlinedCard from '../../components/outlined card/OutlinedCard'
import Sidebar from '../../components/sidebar/Sidebar'
import './History.css'

const History = () => {
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div className="title-page">
                            <p>History</p>
                        </div>
                        <div className="row">
                                <OutlinedCard />
                        </div>
                        <div className="row">
                                <OutlinedCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default History