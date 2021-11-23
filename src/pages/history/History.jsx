import OutlinedCard from '../../components/outlined-card/OutlinedCard'
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
                                <OutlinedCard type="card expense" date="25 oct 2021" desc="Beli mouse" amount="350.000"/>
                        </div>
                        <div className="row">
                                <OutlinedCard type="card income"ate="30 oct 2021" desc="Gaji magang" amount="2.500.000"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default History