import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'

import axios from 'axios'

// const initialState = [{
//     _id: "abc",
//     firstName: "Hakan",
//     lastName: "Şahin",
//     age: "34"
// },{
//     _id: "def",
//     firstName: "Mehmet",
//     lastName: "Demir",
//     age: "36"
// }]

const userSlice = createSlice({
    name: 'user',
    initialState: {
        list: [],
        profile: undefined,
        xauth: undefined
    },
    reducers: {
        setAll: (state, {payload}) => {

            state.list = payload
        },
        add: (state, {payload}) => {

            state.list = [...state.list, payload]
        },
        update: (state, {payload}) => {

            state.list = state.list.map((item) => {

                if (item._id === payload._id) {
                    return payload
                }

                return item
            })
        },
        remove: (state, {payload:_id}) => {

            state.list = state.list.filter(item => item._id !== _id)
        },
        setProfile: (state, {payload}) => {

            const {profile, xauth} = payload

            state.profile = profile
            state.xauth = xauth

            // session cache
            sessionStorage.setItem('xauth', xauth)
        },
        signOut: (state, {payload}) => {

            state.profile = undefined
            state.xauth = undefined

            sessionStorage.removeItem('xauth')
        }

    }
})

export const {
    setAll,
    add,
    update,
    remove,
    setProfile,
    signOut
} = userSlice.actions

// ASYNC

export const getAll = createAsyncThunk('getAll', (params, {getState, dispatch}) => {

    // ASYNC REDUX UPDATE

    console.log('getAll params', params)

    const {
        callback
    } = params

    const url = '/api/users'
    axios.get(url)
        // PROMISE
        .then((response) => {
            console.log('thunk response', response.data)
            
            dispatch(setAll(response.data))

            callback()
        })
        .catch((error) => {
            console.log('error', error)
        })

})

export const addNew = createAsyncThunk('addNew', (params, {getState, dispatch}) => {

    const {
        callback,
        userInfo
    } = params

    const url = '/api/user'
    axios.post(url, userInfo)
        .then((response) => {

            dispatch(add(response.data))

            callback()
        })
        .catch((error) => {
            console.log('error', error)
        })

})

export const updateUser = createAsyncThunk('updateUser', (params, {getState, dispatch}) => {

    const {
        callback,
        userInfo,
        _id
    } = params

    const url = `/api/user/${_id}`
    axios.patch(url, userInfo)
        .then((response) => {

            console.log('thunk update', response.data)

            dispatch(update(response.data))

            callback()
        })
        .catch((error) => {
            console.log('error', error)
        })

})

export const removeUser = createAsyncThunk('removeUser', (params, {getState, dispatch}) => {

    const {
        callback,
        _id
    } = params

    const url = `/api/user/${_id}`
    axios.delete(url)
        .then((response) => {

            console.log('thunk remove', response.status)

            if (response.status === 200) {
                dispatch(remove(_id))
            }

            callback()
        })
        .catch((error) => {
            console.log('error', error)
        })

})

export const signUp = createAsyncThunk('signUp', (params, {getState, dispatch}) => {

    const {
        callback,
        userInfo
    } = params

    const url = `/api/signup`
    axios.post(url, userInfo)
        .then((response) => {

            const profile = response.data
            const xauth = response.headers.xauth

            dispatch(
                setProfile({
                    profile,
                    xauth
                })
            )

            callback()
        })
        .catch((error) => {
            console.log('error', error)
        })

})

export const signIn = createAsyncThunk('signIn', (params, {getState, dispatch}) => {

    const {
        callback,
        userInfo
    } = params

    const url = `/api/signin`
    axios.post(url, userInfo)
        .then((response) => {

            const profile = response.data
            const xauth = response.headers.xauth

            dispatch(
                setProfile({
                    profile,
                    xauth
                })
            )

            callback()
        })
        .catch((error) => {
            console.log('error', error)
        })

})

export const getProfile = createAsyncThunk('getProfile', (params, {getState, dispatch}) => {

    const {
        callback=() => {},
        xauth
    } = params

    const url = `/api/me`
    axios.get(url, {
        headers: {
            xauth
        }
    })
        .then((response) => {

            console.log('user profile', response.data)

            const profile = response.data

            dispatch(
                setProfile({
                    profile,
                    xauth
                })
            )

            callback()
        })
        .catch((error) => {
            console.log('error', error)
        })

})

export default userSlice.reducer