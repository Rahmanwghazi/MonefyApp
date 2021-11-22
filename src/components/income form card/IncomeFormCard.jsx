import './IncomeFormCard.css'

const IncomeFormCard = () => {
    return (
        <div className="card text-white bg-dark mb-3">
            <div className="card-body form-card income-form-card">
                <h5 className="card-title text-center">Add Income</h5>
                <form>
                    <div className="form-group">
                        <label>Amount  </label>
                        <input type="text" id="name" className="form-control transparent-input"/>
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select id="nationality" className="form-control" >
                            <option value="" defaultValue >Select</option>
                            <option value="Salary">Salary</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Date </label>
                        <input type="text" id="date" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Notes  </label>
                        <input type="text" id="notes" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-p"> Submit </button>
                </form>
            </div>
        </div>
    )
}

export default IncomeFormCard