import './OutlinedCard.css'

const OutlinedCard = (props) => {
    return (
        <div className="outlined-card mb-3">
            <div className={props.type}>
                <div className="card-body date">
                    <p>25 Oct 2020</p>
                    <div className="row">
                        <div className="col-6">
                            <h5 className="card-desc">{props.desc}</h5>
                        </div>
                        <div className="col-6 mb-4">
                            <h5 className="amount-text">Rp. {props.amount}</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OutlinedCard