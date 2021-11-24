import './OutlinedCard.css'



const OutlinedCard = (props) => {

    const formatRupiah = (money) => {
        return new Intl.NumberFormat('id-ID',
            { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
        ).format(money);
    }

    const formattedMoney = formatRupiah(props.amount)

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
                            <h5 className="amount-text"> {formattedMoney}</h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col mutation-button">
                        <p className="text-white">edit</p>
                    </div>
                    <div className="col-1 mutation-button">
                        <p className="text-white">delete</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OutlinedCard