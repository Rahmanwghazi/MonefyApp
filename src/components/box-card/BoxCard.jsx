import MonefyChart from '../chart/MonefyChart'
import './BoxCard.css'

const BoxCard = (props) => {
    return (
        <div className="card text-white bg-dark mb-3">
            <div className={props.type}>
                <h5 className="card-title text-center">{props.title}</h5>
                <div className="graph">
                {props.title === "Graph" ? <MonefyChart /> : null}
                </div>
                <p className="card-text text-center"> {props.content}</p>
                <p className="text-center">{props.avg}</p>
            </div>
        </div>
    )
}

export default BoxCard