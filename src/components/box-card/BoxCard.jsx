import MonefyChart from '../chart/MonefyChart'
import { RuleModal } from '../modals/RuleModal'
import './BoxCard.css'

const BoxCard = (props) => {
    return (
        <div className="card text-white bg-dark mb-3">
            <div className={props.type}>
                <h5 className="card-title text-center">{props.title}</h5>
                <div className="graph">
                    {props.title === "Graph" ? <MonefyChart /> : null}
                </div>
                {
                    props.title === "rule" ? <p className="card-text text-center" style={{cursor: "pointer", marginTop: "60px"}}data-bs-toggle="modal" data-bs-target="#modalForm"> {props.content}</p> :
                        <p className="card-text text-center"> {props.content}</p>
                }
                <p className="text-center">{props.avg}</p>
                <RuleModal />
            </div>
        </div>
    )
}

export default BoxCard