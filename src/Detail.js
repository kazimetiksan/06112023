import {
    useParams
} from 'react-router-dom'

import { useRedux } from './redux/hooks'

const Detail = () => {

    const {_id} = useParams()
    console.log('params', _id)

    const {getUser} = useRedux()

    const selectedUser = getUser(_id)

    console.log('selected user', selectedUser)

    return (
        <div style={{
            margin: 50
        }}>
            Hello {selectedUser.firstName}
        </div>
    )
}

export default Detail