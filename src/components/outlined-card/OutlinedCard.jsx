import './OutlinedCard.css'

const OutlinedCard = () => {
    return (
        <div className="outlined-card">
            <div className="card card-history mb-3">
            <div className="card-body date">
                <p>25 Oct 2020</p>
                <div className="row">
                    <div className="col-6">
                        <h5 className="card-desc">Gaji magang</h5>
                    </div>
                    <div className="col-6 mb-4">
                        <h5 className="amount-text">+Rp 3.500.000</h5>
                    </div>
                </div>

            </div>
        </div>
        </div>
        
    )
}

export default OutlinedCard