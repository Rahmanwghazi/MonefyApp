import BoxCard from '../../components/box card/BoxCard'
import Sidebar from '../../components/sidebar/Sidebar'
import './AddData.css'

const AddData = () => {
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div className="title-page">
                            <p>Add Data</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <BoxCard />
                            </div>
                            <div className="col-md-6">
                                <BoxCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddData