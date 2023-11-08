import {
    useSelector
} from 'react-redux'

export const useRedux = () => {

    const userList = useSelector(state => state.users.list)

    const getUser = _id => userList.find(item => item._id === _id)

    return {
        userList,
        getUser
    }
}