import './OutlinedCard.css'

const OutlinedCard = () => {
    return (
        <div className="outlined-card">
            <div class="card card-history mb-3">
            <div class="card-body date">
                <p>25 Oct 2020</p>
                <div className="row">
                    <div className="col-9">
                        <h5 class="card-desc">Gaji magang</h5>
                    </div>
                    <div className="col-3 mb-4">
                        <h5 class="amount-text">+Rp 3.500.000</h5>
                    </div>
                </div>

            </div>
        </div>
        </div>
        
    )
}

export default OutlinedCard