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
            console.log('state', state)
            console.log('data1', payload)

            return payload
        }
    }
})

export const {
    setAll
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

export default userSlice.reducer