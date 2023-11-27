import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  active: 'mern',
}

export const activeSlice = createSlice({
  name: 'activeChat',
  initialState,
  reducers: {
    activeChat: (state, action) => {
    state.active = action.payload;
    },
  },
})

export const { activeChat } = activeSlice.actions

export default activeSlice.reducer