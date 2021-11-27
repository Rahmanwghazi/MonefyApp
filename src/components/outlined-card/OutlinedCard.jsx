import './OutlinedCard.css'
import editPng from '../../assets/edit.png'
import deletePng from '../../assets/trash-bin.png'

import { formatRupiah } from '../../utils/FormatterRupiah';
import { EditHistoryModal } from '../modals/EditHistoryModal';
import { ConfirmDeleteModal } from '../modals/ConfirmDeleteModal';

const OutlinedCard = (props) => {
    const { data, type, deleteRecord, updateRecord } = props
    const formattedMoney = formatRupiah(data.amount)

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
                        <EditHistoryModal data={data} updateRecord={updateRecord}/>
                    </div>
                    <div className="col mutation-button delete">
                        <img src={deletePng} alt="delete" data-bs-toggle="modal" data-bs-target={`#modalDelete${data.id}`}></img>
                        <ConfirmDeleteModal data={data} deleteRecord={deleteRecord}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OutlinedCard