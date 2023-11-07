import {
    createSlice
} from '@reduxjs/toolkit'

const initialState = [{
    _id: "abc",
    firstName: "Hakan",
    lastName: "Şahin",
    age: "34"
},{
    _id: "def",
    firstName: "Mehmet",
    lastName: "Demir",
    age: "36"
}]

const userSlice = createSlice({
    name: 'user',
    initialState,
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

export default userSlice.reducer