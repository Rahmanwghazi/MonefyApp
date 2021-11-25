import ExpenseFormCard from '../../components/form-card/ExpenseFormCard'
import IncomeFormCard from '../../components/form-card/IncomeFormCard'
import Sidebar from '../../components/sidebar/Sidebar'
import { v4 as uuidv4 } from 'uuid'
import './AddData.css'
import { useMutation } from '@apollo/client'
import { AddRecord } from '../../graphql/Mutations'
import Messaging from "react-cssfx-loading/lib/Messaging";

const AddData = () => {

    const [addRecord, { loading }] = useMutation(AddRecord)

    const addNewRecord = (record) => {
        const newRecord = {
            id: uuidv4(),
            ...record
        }
        addRecord({
            variables: {
                amount: newRecord.amount,
                category: newRecord.category,
                date: newRecord.date,
                notes: newRecord.notes,
                type: newRecord.type
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
                                <p>Add Data</p>
                            </div>
                            <div className="col">
                                {loading ? <Messaging color="#FD7014" width="15px" height="15px"/> : <br />}
                            </div>
                        </div>
                        <div className="row">
                                <>
                                    <div className="col-md-6">
                                        <ExpenseFormCard addNewRecord={addNewRecord} />
                                    </div>
                                    <div className="col-md-6">
                                        <IncomeFormCard addNewRecord={addNewRecord} />
                                    </div>
                                </>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddData