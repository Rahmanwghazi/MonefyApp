import { useState } from "react";
import { Messaging } from "react-cssfx-loading/lib";
import { useUpdateUsername } from "../../hooks/useUpdateUsername";
import './Modal.css'

export const EditUsernameModal = (props) => {
    const initName = props.data?.user.map(item => (item.name))
    const { updateUsername, loadingUpdate } = useUpdateUsername()
    const [name, setName] = useState(initName)
    const userId = localStorage.getItem('auth0:id_token:sub');

    const updateUsernameFn = (updated) => {
        updateUsername({
            variables: {
                name: updated.name,
                userId: userId
            }
        })
    }

    const onUpdate = () => {
        const newAvg = { name: name }
        updateUsernameFn(newAvg)
    }

    const onChange = e => {
        setName(e.target.value)
    }

    if (loadingUpdate) {
        return (
            <Messaging className="loader" color="#FD7014" width="15px" height="15px" />
        )
    } else {

    }

    return (
        <div className="modal fade mt-5" id="modalFormName" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close btn-close text-white mt-5" data-bs-dismiss="modal" aria-label="Close"></button>
                        <h5 className="label-modal edit">Edit</h5>
                        <div onSubmit={onUpdate}>
                            <div className="form-group text-white mt-5">
                                <label>Name  </label>
                                <input type="text" className="form-control" value={name} name="amount" onChange={onChange} />
                            </div>
                            <button onClick={onUpdate} type="submit" className="btn btn-e mb-5" data-bs-dismiss="modal" disabled={name === ""}>
                                update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

