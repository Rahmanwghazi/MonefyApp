import { useState } from "react";
import { Messaging } from "react-cssfx-loading/lib";
import { useUpdateAverageIncome } from "../../hooks/useUpdateAverageIncome";

export const EditAvgIncomeModal = (props) => {
    const initAvg = props.data?.user.map(item => (item.avg_income))
    const { updateAvg, loadingUpdate } = useUpdateAverageIncome()
    const [avg, setAvg] = useState(initAvg)

    const userId = localStorage.getItem('auth0:id_token:sub');

    const updateAverageIncome = (updated) => {
        updateAvg({
            variables: {
                avg_income: updated.averageIncome,
                userId: userId
            }
        })
    }

    const onUpdate = () => {
        const newAvg = { averageIncome: avg }
        updateAverageIncome(newAvg)
    }

    const onChange = e => {
        setAvg(e.target.value)
    }

    if(loadingUpdate){
        return(
            <Messaging className="loader" color="#FD7014" width="15px" height="15px" />
        )
    }else{

    }

    return (
        <div className="modal fade mt-5" id="modalForm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <h5 className="label-modal edit">Edit</h5>
                        <div onSubmit={onUpdate}>
                            <div className="form-group text-white mt-5">
                                <label>Average Income  </label>
                                <input type="number" className="form-control" value={avg} name="amount" onChange={onChange} />
                            </div>
                            <button onClick={onUpdate} type="submit" className="btn btn-e mb-5" data-bs-dismiss="modal" disabled={avg===""}>
                                update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

