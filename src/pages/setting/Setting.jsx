import { useState } from "react";
import Sidebar from '../../components/sidebar/Sidebar'
import './Setting.css'
import { Messaging } from "react-cssfx-loading/lib";
import { formatRupiah } from "../../utils/FormatterRupiah";
import { useGetAverageIncome } from "../../hooks/useGetAverageIncome";
import { useUpdateAverageIncome } from "../../hooks/useUpdateAverageIncome";
import SmallSidebar from "../../components/sidebar/SmallSidebar";
import editPng from '../../assets/edit.png'

const Setting = () => {
    const { data, loading } = useGetAverageIncome()
    const { updateAvg, loadingUpdate } = useUpdateAverageIncome()
    const [avg, setAvg] = useState(data?.recommendation.map(item => (item.averageIncome)))
    const updateAverageIncome = (updated) => {
        updateAvg({
            variables: {
                id: 1,
                averageIncome: updated.averageIncome
            }
        })
    }

    const onUpdate = () => {
        const newAvg = { averageIncome: avg }
        updateAverageIncome(newAvg)
    }

    const onChange = e => {
        setAvg(e.target.value)
    }

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
                                {loadingUpdate || loading ? <Messaging className="loader" color="#FD7014" width="15px" height="15px" /> : <br />}
                            </div>
                        </div>
                        <h3 className="" style={{ color: "#EEEEEE" }} >Average monthly income</h3>
                        <h4 className="avgUser">{formatRupiah(data?.recommendation.map(item => (item.averageIncome)))}</h4>
                        <div className="col mutation-button edit">
                            <img src={editPng} alt="edit" data-bs-toggle="modal" data-bs-target="#modalForm" ></img>
                            <div className="modal fade mt-5" id="modalForm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <h5 className="label-modal edit">Edit</h5>
                                            <div onSubmit={onUpdate}>
                                                <div className="form-group text-white mt-5">
                                                    <label>Average Income  </label>
                                                    <input type="number" className="form-control" value={avg} name="amount" onChange={onChange} />
                                                </div>
                                                <button onClick={onUpdate} type="submit" className="btn btn-e mb-5" data-bs-dismiss="modal">
                                                    update
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Setting