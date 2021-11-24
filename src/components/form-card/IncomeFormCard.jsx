import './FormCard.css'
import { useState } from "react";

const IncomeFormCard = (props) => {
    const [state, setState] = useState({
        amount: "",
        category: "",
        notes: "",
        date: "",
        type: "income"
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
    }
  
    return (
        <div className="card text-white bg-dark mb-3">
            <div className="card-body form-card income-form-card">
                <h5 className="card-title text-center">Add Income</h5>
                <form>
                    <div className="form-group">
                        <label>Amount  </label>
                        <input type="number" className="form-control" placeholder="120.000" value={state.amount} name="amount" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select className="form-control" name="category" value={state.category} onChange={onChange} >
                            <option value="" defaultValue >Select</option>
                            <option value="Salary">Salary</option>
                            <option value="Bonus">Bonus</option>
                            <option value="Gift">Gift</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Date </label>
                        <input type="date" className="form-control"  value={state.date} name="date" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label>Notes  </label>
                        <input type="text" className="form-control" placeholder="gaji november" value={state.notes} name="notes" onChange={onChange} />
                    </div>
                    <button onClick={onSubmit} type="submit" className="btn btn-p"> Submit </button>
                </form>
            </div>
        </div>
    )
}

export default IncomeFormCard