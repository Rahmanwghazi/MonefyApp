import './FormCard.css'
import { useState } from "react";

const ExpenseFormCard = (props) => {
    const [state, setState] = useState({
        amount: "",
        category: "",
        notes: "",
        date: "",
        type: "expense"
    })

    const onChange = e => {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        })
    }

    const onSubmit = e => {
        const newRecord = {
            amount: state.amount,
            category: state.category,
            date: state.date,
            notes: state.notes,
            type: state.type
        }
        props.addNewRecord(newRecord)
        setState({
            ...state,
            amount: "",
            category: "",
            notes: "",
            date: "",
            type: ""
        })
    }
    return (
        <div className="card text-white bg-dark mb-3">
            <div className="card-body form-card expense-form-card">
                <h5 className="card-title text-center">Add Expense</h5>
                <div onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Amount  </label>
                        <input type="number" className="form-control" placeholder="120.000" value={state.amount} name="amount" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select className="form-control" name="category" value={state.category} onChange={onChange} >
                            <option value="" defaultValue >Select</option>
                            <option value="Food">Food</option>
                            <option value="Education">Education</option>
                            <option value="Sport">Sport</option>
                            <option value="Hobby">Hobby</option>
                            <option value="Health">Health</option>
                            <option value="Investment">Investment</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Date </label>
                        <input type="date" className="form-control" value={state.date} name="date" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label>Notes  </label>
                        <input type="text" className="form-control" value={state.notes} name="notes" onChange={onChange} />
                    </div>
                    <button onClick={onSubmit} type="submit" className="btn btn-p" 
                        disabled={state.amount.length < 1 || state.category.length <1 || state.date.length < 1 || state.notes.length < 1 }>
                        Submit 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ExpenseFormCard