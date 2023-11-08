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
        }
    }
})

export const {
    setAll,
    add,
    update
} = userSlice.actions

// ASYNC

export const getAll = createAsyncThunk('getAll', (params, {getState, dispatch}) => {

    // ASYNC REDUX UPDATE

    console.log('getAll params', params)

    const {
        callback
    } = params

    const url = 'https://reactpm.azurewebsites.net/api/users'
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

    const url = 'https://reactpm.azurewebsites.net/api/user'
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

    const url = `https://reactpm.azurewebsites.net/api/user/${_id}`
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

export default userSlice.reducer