import './OutlinedCard.css'
import editPng from '../../assets/edit.png'
import deletePng from '../../assets/trash-bin.png'
import { useState } from "react";

const OutlinedCard = (props) => {

    const formatRupiah = (money) => {
        return new Intl.NumberFormat('id-ID',
            { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
        ).format(money);
    }

    const formattedMoney = formatRupiah(props.amount)
    const [state, setState] = useState({
        amount: props.amount,
        category: props.category,
        notes: props.notes,
        date: props.date,
        type: props.type
    })

    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const onUpdate = e => {
        const newRecord = {
            amount: state.amount,
            category: state.category,
            date: state.date,
            notes: state.notes,
            type: state.type
        }
        props.updateRecord(props.id, newRecord)
    }

    return (
        <div className="outlined-card mb-3">
            <div className={props.type}>
                <div className="card-body date">
                    <p>{props.date}</p>
                    <div className="row">
                        <div className="col-6">
                            <h5 className="card-desc">{props.desc}</h5>
                        </div>
                        <div className="col-6 mb-4">
                            <h5 className="amount-text">
                                {props.type === "card income" ? "+ " : "- "}
                                {formattedMoney}</h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10">
                    </div>
                    <div className="col mutation-button">
                        <img src={editPng} alt="edit" data-bs-toggle="modal" data-bs-target={`#modalForm${props.id}`}></img>
                        <div className="modal fade mt-5" id={`modalForm${props.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                <input type="text" className="form-control" value={state.type} name="type" onChange={onChange} />
                                            </div>
                                            <button onClick={onUpdate} type="submit" className="btn btn-e mb-5" >
                                                update
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mutation-button">
                        <img src={deletePng} alt="delete" onClick={() => props.deleteRecord(props.id)}></img>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OutlinedCard