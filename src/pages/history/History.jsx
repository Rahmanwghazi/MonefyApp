import OutlinedCard from '../../components/outlined-card/OutlinedCard'
import Sidebar from '../../components/sidebar/Sidebar'
import './History.css'
import Messaging from "react-cssfx-loading/lib/Messaging";
import { useGetRecords } from '../../hooks/useGetRecords'
import { useDeleteRecord } from '../../hooks/useDeleteRecord'
import { useUpdateRecord } from '../../hooks/useUpdateRecord'

const History = () => {
    const { loadingGetRecord, data } = useGetRecords()
    const { deleteRecordById, loadingDelete } = useDeleteRecord()
    const { updateRecordById, loadingUpdate } = useUpdateRecord()

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

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div className="title-page row">
                            <div className="col">
                                <p>History</p>
                            </div>
                            <div className="col">
                                {loadingGetRecord || loadingDelete || loadingUpdate ? <Messaging className="loader" color="#FD7014" width="15px" height="15px" /> : <br />}
                            </div>
                        </div>
                        <div className="row">
                            {data?.records.map(item => (
                                item.type === "expense" ?
                                    <OutlinedCard key={item.id} type="card expense" data={item} deleteRecord={deleteRecord} updateRecord={updateRecord} />
                                    : <OutlinedCard key={item.id} type="card income" data={item} deleteRecord={deleteRecord} updateRecord={updateRecord} />

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default History