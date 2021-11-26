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
                {
                    props.title === "rule" ? <p className="card-text text-center" style={{cursor: "pointer", marginTop: "60px"}}data-bs-toggle="modal" data-bs-target="#modalForm"> {props.content}</p> :
                        <p className="card-text text-center"> {props.content}</p>
                }
                <p className="text-center">{props.avg}</p>
                <div className="modal fade mt-5" id="modalForm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <h5 className="label-modal edit">What is the 50/30/20 rule?</h5>
                                <p className="text-justify font-weight-light">
                                    The 50/30/20 rule is an easy budgeting method that can help you to manage your money effectively, simply and sustainably. The basic rule of thumb is to divide your monthly after-tax income into three spending categories: <b>50% for needs, 30% for wants and 20% for savings or paying off debt</b>. <br /><br />
                                    By regularly keeping your expenses balanced across these main spending areas, you can put your money to work more efficiently. And with only three major categories to track, you can save yourself the time and stress of digging into the details every time you spend. <br /><br />
                                    One question we hear a lot when it comes to budgeting is, “Why can’t I save more?”  The 50/30/20 rule is a great way to solve that age-old riddle and build more structure into your spending habits. It can make it easier to reach your financial goals, whether you’re saving up for a rainy day or working to pay off debt. <br /><br />
                                    <a href="https://n26.com/en-eu/blog/50-30-20-rule#:~:text=The%2050%2F30%2F20%20rule%20is%20an%20easy%20budgeting%20method,savings%20or%20paying%20off%20debt." target="_blank" rel="noopener noreferrer" className="text-white">Read more</a>
                                </p>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxCard