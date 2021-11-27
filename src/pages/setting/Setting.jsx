import Sidebar from '../../components/sidebar/Sidebar'
import './Setting.css'
import { Messaging } from "react-cssfx-loading/lib";
import { formatRupiah } from "../../utils/FormatterRupiah";
import { useGetAverageIncome } from "../../hooks/useGetAverageIncome";
import SmallSidebar from "../../components/sidebar/SmallSidebar";
import editPng from '../../assets/edit.png'
import { EditAvgIncomeModal } from "../../components/modals/EditAvgIncomeModal";

const Setting = () => {
    const { data, loading } = useGetAverageIncome()
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
                                {loading ? <Messaging className="loader" color="#FD7014" width="15px" height="15px" /> : <br />}
                            </div>
                        </div>
                        <h3 className="" style={{ color: "#EEEEEE" }} >Average monthly income</h3>
                        <h4 className="avgUser">{formatRupiah(data?.recommendation.map(item => (item.averageIncome)))}</h4>
                        <div className="col mutation-button edit">
                            <img src={editPng} alt="edit" data-bs-toggle="modal" data-bs-target="#modalForm" ></img>
                            <EditAvgIncomeModal data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Setting