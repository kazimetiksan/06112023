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
    reducers: {}
})

export default userSlice.reducer