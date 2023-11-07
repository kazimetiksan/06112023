import {
    Link
} from 'react-router-dom'

const NotFound = () => {

    return (
        <div style={{
            margin: 50
        }}>
            404 Not Found
            <Link to="/">Anasayfa</Link>
        </div>
    )
}

export default NotFound