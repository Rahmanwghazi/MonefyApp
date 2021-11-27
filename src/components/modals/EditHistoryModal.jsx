import { useState } from "react";

export const EditHistoryModal = (props) => {
    const [state, setState] = useState({
        amount: props.data.amount,
        category: props.data.category,
        notes: props.data.notes,
        date: props.data.date,
        type: props.data.type
    })

    const [check, setCheck] = useState(false);

    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }


    const onUpdate = () => {
        const newRecord = {
            amount: state.amount,
            category: state.category,
            date: state.date,
            notes: state.notes,
            type: check === true ? "expense" : "income"
        }
        props.updateRecord(props.data.id, newRecord)
    }

    return (
        <div className="modal fade mt-5" id={`modalForm${props.data.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <h5 className="label-modal edit">Edit</h5>
                        <div onSubmit={onUpdate}>
                            <div className="form-group text-white">
                                <label>Amount  </label>
                                <input type="number" className="form-control" value={state.amount} name="amount" onChange={onChange} />
                            </div>
                            <div className="form-group text-white">
                                <label>Category</label>
                                <select className="form-control" name="category" value={state.category} onChange={onChange} >
                                    {
                                        check === true ?
                                            <>
                                                <option value="" defaultValue>Select</option>
                                                <option value="Food">Food</option>
                                                <option value="Education">Education</option>
                                                <option value="Sport">Sport</option>
                                                <option value="Hobby">Hobby</option>
                                                <option value="Health">Health</option>
                                                <option value="Investment">Investment</option>
                                                <option value="Other">Other</option>
                                            </> : <>
                                                <option value="Salary">Salary</option>
                                                <option value="Bonus">Bonus</option>
                                                <option value="Gift">Gift</option>
                                                <option value="Other">Other</option>
                                            </>
                                    }
                                </select>
                            </div>
                            <div className="form-group text-white" >
                                <label>Date </label>
                                <input type="date" className="form-control" value={state.date} name="date" onChange={onChange} />
                            </div>
                            <div className="form-group text-white">
                                <label>Notes  </label>
                                <input type="text" className="form-control" value={state.notes} name="notes" onChange={onChange} />
                            </div>
                            <div className="form-group text-white">
                                <label>Type  </label>
                                <label className="switch">
                                    <input type="checkbox" value={check === true ? "expense" : "income"} name="type" onClick={() => setCheck(!check)} />
                                    <span className="slider round"></span>
                                </label>
                                {check ? <p className="text-center mt-2">expense</p> : <p className="text-center mt-2">income</p>}
                            </div>
                            <button onClick={onUpdate} style={{ marginTop: "-20px" }} type="submit" className="btn btn-e mb-5" data-bs-dismiss="modal">
                                update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}