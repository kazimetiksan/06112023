import {
    createSlice
} from '@reduxjs/toolkit'

const initialState = [{
    firstName: "Hakan",
    lastName: "Şahin",
    age: "34"
}]

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
})

export default userSlice.reducer