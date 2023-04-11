import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await axios.get(USERS_URL)
        return response.data
    }
    catch (err) {
        return err.message
    }
})

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUsersFetch() { },
        getUsers: (state, action) => {
            return action.payload
        }
    },
    // extraReducers(builder) {
    //     builder
    //         .addCase(fetchUsers.fulfilled, (state, action) => {
    //             return action.payload
    //         })
    // }
})

export const getAllUsers = state => state.users

export const { getUsersFetch, getUsers } = usersSlice.actions

export default usersSlice.reducer