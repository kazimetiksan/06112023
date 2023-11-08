import {
    useSelector
} from 'react-redux'

export const useRedux = () => {

    const userList = useSelector(state => state.users)

    return {
        userList
    }
}