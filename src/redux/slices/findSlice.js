import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  toFind : ""
}

export const findSlice = createSlice({
  name: 'find',
  initialState,
  reducers: {
    setToFind(state, action){
        state.toFind = action.payload;
    }
  },
})

export const { setToFind } = findSlice.actions

export default findSlice.reducer