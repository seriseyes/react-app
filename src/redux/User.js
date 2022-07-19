import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            firstname: "",
            lastname: ""
        }
    },
    reducers: {
        setUserData: (state, action) => {
            state.user = {
                firstname: action.payload.firstname,
                lastname: action.payload.lastname
            }
        },
    },
})

export const {setUserData} = userSlice.actions
export default userSlice.reducer