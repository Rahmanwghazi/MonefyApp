import Sidebar from '../../components/sidebar/Sidebar'
import './Setting.css'
import { Messaging } from "react-cssfx-loading/lib";
import { formatRupiah } from "../../utils/FormatterRupiah";
import { useGetAverageIncome } from "../../hooks/useGetAverageIncome";
import SmallSidebar from "../../components/sidebar/SmallSidebar";
import editPng from '../../assets/edit.png'
import { EditAvgIncomeModal } from "../../components/modals/EditAvgIncomeModal";
import { useGetUsername } from '../../hooks/useGetUsername';
import { Link } from 'react-router-dom';

const Setting = (props) => {
    const { loading, data } = useGetAverageIncome()
    const { dataGetUsername, loadingGetUsername } = useGetUsername()
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
                            <div className="col">
                                <p>Setting</p>
                            </div>
                            <div className="col">
                                {loading || loadingGetUsername ? <Messaging className="loader" color="#FD7014" width="15px" height="15px" /> : <br />}
                            </div>
                        </div>
                        <h3 className="" style={{ color: "#EEEEEE" }} >Name</h3>
                        <h4 className="avgUser">{(dataGetUsername?.user.map(item => (item.name)))}</h4>
                        <div className="col mutation-button edit">
                            <img src={editPng} alt="edit" data-bs-toggle="modal" data-bs-target="#modalForm" ></img>
                            <EditAvgIncomeModal data={dataGetUsername} />
                        </div>
                        <br />
                        <h3 className="" style={{ color: "#EEEEEE" }} >Average monthly income</h3>
                        <h4 className="avgUser">{formatRupiah(data?.user.map(item => (item.avg_income)))}</h4>
                        <div className="col mutation-button edit">
                            <img src={editPng} alt="edit" data-bs-toggle="modal" data-bs-target="#modalForm" ></img>
                            <EditAvgIncomeModal data={data} />
                        </div>
                        <Link to="/">
                        <button className="btn btn-fill text-white border-0 mt-5" onClick={() => props.auth.logout()} >
                            Sign Out
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Setting