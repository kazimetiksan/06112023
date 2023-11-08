import {
    useSelector
} from 'react-redux'

export const useRedux = () => {

    const userList = useSelector(state => state.users.list)
    const profile = useSelector(state => state.users.profile)
    const xauth = useSelector(state => state.users.xauth)

    const getUser = _id => userList.find(item => item._id === _id)

    const isLoggedIn = () => xauth !== undefined

    return {
        userList,
        profile,
        xauth,
        getUser,
        isLoggedIn
    }
}