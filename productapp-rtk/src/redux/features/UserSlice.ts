import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    avatar: 'a.png',
    name : 'Anil'
}
const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers: {}
});

export const userReducer = userSlice.reducer;