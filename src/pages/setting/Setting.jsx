import { useState } from "react";
import { useMutation, useQuery } from '@apollo/client'
import Sidebar from '../../components/sidebar/Sidebar'
import './Setting.css'
import { GetAverageIncome } from "../../graphql/Queries";
import { UpdateAverageIncome } from "../../graphql/Mutations";
import { Messaging } from "react-cssfx-loading/lib";

const Setting = () => {
    const { data, loading } = useQuery(GetAverageIncome)
    const [updateAvg, { loading: loadingUpdate }] = useMutation(UpdateAverageIncome, {
        refetchQueries: [GetAverageIncome]
    })

    const [avg, setAvg] = useState(data);

    const updateAverageIncome = (updated) => {
        updateAvg({
            variables: {
                id: 1,
                averageIncome: updated.averageIncome
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
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div className="title-page row">
                            <div className="col">
                                <p>Setting</p>
                            </div>
                            <div className="col">
                                {loadingUpdate ? <Messaging className="loader" color="#FD7014" width="15px" height="15px" /> : <br />}
                            </div>
                        </div>
                        <h3 className="" style={{ color: "#EEEEEE" }} >Average monthly income</h3>
                        <div className="form-groups">
                            <input type="number" className="form-control" value={avg} name="avg" onChange={onChange} />
                        </div>
                        <button onClick={onUpdate} type="submit" className="btn btn-u"> update</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Setting