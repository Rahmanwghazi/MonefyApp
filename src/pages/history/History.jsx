import OutlinedCard from '../../components/outlined-card/OutlinedCard'
import Sidebar from '../../components/sidebar/Sidebar'
import './History.css'
import { useMutation, useQuery } from '@apollo/client'
import { GetRecord } from '../../graphql/Queries'
import Messaging from "react-cssfx-loading/lib/Messaging";
import { DeleteRecord } from '../../graphql/Mutations'

const History = () => {
    const { loading: loadingGetRecord, data } = useQuery(GetRecord)
    const [deleteRecordById, { loading: loadingDelete }] = useMutation(DeleteRecord, {
        refetchQueries: [GetRecord]
    })

    const deleteRecord = (id) => {
        deleteRecordById({
            variables: { id }
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
                                {loadingGetRecord || loadingDelete ? <Messaging color="#FD7014" width="15px" height="15px"/> : <br />}
                            </div>
                        </div>
                        <div className="row">
                            {data?.records.map(item => (
                                item.type === "expense" ?
                                    <OutlinedCard key={item.id} type="card expense" id={item.id} date={item.date} desc={item.notes} amount={item.amount} deleteRecord={deleteRecord} />
                                    : <OutlinedCard key={item.id} type="card income" id={item.id} date={item.date} desc={item.notes} amount={item.amount} deleteRecord={deleteRecord} />

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default History