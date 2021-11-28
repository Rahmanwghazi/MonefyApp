import OutlinedCard from '../../components/outlined-card/OutlinedCard'
import Sidebar from '../../components/sidebar/Sidebar'
import './History.css'
import Messaging from "react-cssfx-loading/lib/Messaging";
import { useGetRecordsDesc } from '../../hooks/useGetRecordsDesc'
import { useDeleteRecord } from '../../hooks/useDeleteRecord'
import { useUpdateRecord } from '../../hooks/useUpdateRecord'
import SmallSidebar from '../../components/sidebar/SmallSidebar';
import { useState } from 'react';
import { useGetRecordsAsc } from '../../hooks/useGetRecordsAsc';

const History = () => {
    const { loadingGetRecordDesc, dataDesc } = useGetRecordsDesc()
    const { loadingGetRecordAsc, dataAsc } = useGetRecordsAsc()
    const { deleteRecordById, loadingDelete } = useDeleteRecord()
    const { updateRecordById, loadingUpdate } = useUpdateRecord()

    //false = newest, true = oldest
    const [check, setCheck] = useState(false);

    const deleteRecord = (id) => {
        deleteRecordById({
            variables: { id }
        })
    }

    const updateRecord = (id, updatedRecord) => {
        updateRecordById({
            variables: {
                id: id,
                amount: updatedRecord.amount,
                category: updatedRecord.category,
                date: updatedRecord.date,
                notes: updatedRecord.notes,
                type: updatedRecord.type
            }
        })
    }

    console.log("dataasc", dataAsc)
    console.log("datadesc", dataDesc)

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
                            <div className="col-md-5">
                                <p>History</p>
                            </div>
                            <div className="col">
                                {loadingGetRecordDesc || loadingGetRecordAsc || loadingDelete || loadingUpdate ? <Messaging className="loader" color="#FD7014" width="15px" height="15px" /> : <br />}
                            </div>
                            <label className="col-md-4 sort-switch">
                                <input type="checkbox" value={check} name="sort-type" onClick={() => setCheck(!check)} />
                                <span className="sort-slider round"></span>
                                {check ? <p className="sort-desc">oldest</p> : <p className="sort-desc">newest</p>}
                            </label>
                        </div>
                        {
                            check ?
                                <div className="row">
                                    {dataAsc?.record.map(item => (
                                        item.type === "expense" ?
                                            <OutlinedCard key={item.id} type="card expense" data={item} deleteRecord={deleteRecord} updateRecord={updateRecord} />
                                            : <OutlinedCard key={item.id} type="card income" data={item} deleteRecord={deleteRecord} updateRecord={updateRecord} />
                                    ))}
                                </div> :
                                <div className="row">
                                    {dataDesc?.record.map(item => (
                                        item.type === "expense" ?
                                            <OutlinedCard key={item.id} type="card expense" data={item} deleteRecord={deleteRecord} updateRecord={updateRecord} />
                                            : <OutlinedCard key={item.id} type="card income" data={item} deleteRecord={deleteRecord} updateRecord={updateRecord} />
                                    ))}
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )

}

export default History