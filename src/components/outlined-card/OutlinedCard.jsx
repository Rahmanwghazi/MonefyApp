import './OutlinedCard.css'
import editPng from '../../assets/edit.png'
import deletePng from '../../assets/trash-bin.png'

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
                        <img src={editPng} alt="edit"></img>
                    </div>
                    <div className="col mutation-button">
                        <img src={deletePng} alt="edit" onClick={() => props.deleteRecord(props.id)}></img>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OutlinedCard