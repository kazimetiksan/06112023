import {
    useParams
} from 'react-router-dom'

import { useSelector } from 'react-redux'

const DetailV1 = () => {

    const {_id} = useParams()
    console.log('params', _id)

    // const selectedUser = useSelector(state => {
    //     return state.users.find((item) => {
    //         return item._id === _id
    //     })
    // })

    const selectedUser = useSelector(state => state.users.find(item => item._id === _id))

    console.log('selected user', selectedUser)

    return (
        <div style={{
            margin: 50
        }}>
            Hello {selectedUser.firstName}
        </div>
    )
}

export default DetailV1