import OutlinedCard from '../../components/outlined-card/OutlinedCard'
import Sidebar from '../../components/sidebar/Sidebar'
import './History.css'
import { useQuery } from '@apollo/client'
import { GetRecord } from '../../graphql/Queries'

const History = () => {
    const { loading, data } = useQuery(GetRecord)

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div className="title-page">
                            <p>History</p>
                        </div>
                        <div className="row">
                            {
                                loading ? <h5 className="text-white">Loading...</h5> : <br />
                            }
                            {data?.records.map(item => (
                                item.type === "expense" ?
                                    <OutlinedCard type="card expense" date={item.date} desc={item.notes} amount={item.amount} />
                                    : <OutlinedCard type="card income" date={item.date} desc={item.notes} amount={item.amount} />

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default History