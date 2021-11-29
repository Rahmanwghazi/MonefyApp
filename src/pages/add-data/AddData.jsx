import ExpenseFormCard from '../../components/form-card/ExpenseFormCard'
import IncomeFormCard from '../../components/form-card/IncomeFormCard'
import Sidebar from '../../components/sidebar/Sidebar'
import { v4 as uuidv4 } from 'uuid'
import './AddData.css'
import Messaging from "react-cssfx-loading/lib/Messaging";
import { useAddRecord } from '../../hooks/useAddRecord'
import SmallSidebar from '../../components/sidebar/SmallSidebar'

const AddData = (props) => {
    const { isAuthenticated } = props.auth
    const {addRecord, loading } = useAddRecord()
    const userId = localStorage.getItem('auth0:id_token:sub');
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
                type: newRecord.type,
                userId: userId
            }
        })
    }
    if (isAuthenticated()){

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
                                <p>Add Data</p>
                            </div>
                            <div className="col">
                                {loading ? <Messaging color="#FD7014" width="15px" height="15px" /> : <br />}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <ExpenseFormCard addNewRecord={addNewRecord} />
                            </div>
                            <div className="col-md-6">
                                <IncomeFormCard addNewRecord={addNewRecord} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    }
    return (
        <div className="container">
            <h4 className="text-white text-center mt-5">
                You are not logged in! Please <p style={{ cursor: 'pointer', fontWeight: "bolder" }} onClick={() => props.auth.login()}> Sign In </p> to continue.
            </h4>
        </div>
    );
}

export default AddData