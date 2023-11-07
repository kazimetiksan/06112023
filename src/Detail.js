import {
    useParams
} from 'react-router-dom'

const Detail = () => {

    const {_id} = useParams()
    console.log('params', _id)

    return (
        <div style={{
            margin: 50
        }}>
            Detail {_id}
        </div>
    )
}

export default Detail