import './OutlinedCard.css'
import editPng from '../../assets/edit.png'
import deletePng from '../../assets/trash-bin.png'
import { useState } from "react";

const OutlinedCard = (props) => {
    const { data, type, deleteRecord, updateRecord } = props

    const formatRupiah = (money) => {
        return new Intl.NumberFormat('id-ID',
            { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
        ).format(money);
    }

    const formattedMoney = formatRupiah(data.amount)
    const [state, setState] = useState({
        amount: data.amount,
        category: data.category,
        notes: data.notes,
        date: data.date,
        type: data.type
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
        updateRecord(data.id, newRecord)
    }

    return (
        <div className="outlined-card mb-3">
            <div className={type}>
                <div className="card-body date">
                    <p>{data.date}</p>
                    <div className="row">
                        <div className="col-6">
                            <h5 className="card-desc">{data.notes}</h5>
                        </div>
                        <div className="col-6 mb-4">
                            <h5 className="amount-text">
                                {type === "card income" ? "+ " : "- "}
                                {formattedMoney}</h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10">
                        <h5 className="category-desc">{data.category}</h5>
                    </div>
                    <div className="col mutation-button edit">
                        <img src={editPng} alt="edit" data-bs-toggle="modal" data-bs-target={`#modalForm${data.id}`}></img>
                        <div className="modal fade mt-5" id={`modalForm${data.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                            <button onClick={onUpdate} type="submit" className="btn btn-e mb-5" data-bs-dismiss="modal">
                                                update
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mutation-button delete">
                        <img src={deletePng} alt="delete" onClick={() => deleteRecord(data.id)}></img>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OutlinedCard