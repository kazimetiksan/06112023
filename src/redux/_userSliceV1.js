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

const userSliceV1 = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        setAll: (state, {payload}) => {

            return payload
        },
        add: (state, {payload}) => {

            return [...state, payload]
        },
        update: (state, {payload}) => {

            return state.map((item) => {

                if (item._id === payload._id) {
                    return payload
                }

                return item
            })
        },
        remove: (state, {payload:_id}) => {

            return state.filter(item => item._id !== _id)
        }

    }
})

export const {
    setAll,
    add,
    update,
    remove
} = userSliceV1.actions

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
        signupInfo
    } = params

    const url = `/api/signup`
    axios.post(url, signupInfo)
        .then((response) => {

            console.log('thunk signup data', response.data)
            console.log('thunk signup headers', response.headers)

            callback()
        })
        .catch((error) => {
            console.log('error', error)
        })

})

export default userSliceV1.reducer