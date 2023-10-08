import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: null,
}
export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoginInfo: (state,action) => {
        state.userInfo = action.payload
    },
  },
})
export const { userLoginInfo} = counterSlice.actions

export default counterSlice.reducer