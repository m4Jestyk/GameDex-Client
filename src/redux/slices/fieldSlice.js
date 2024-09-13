import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name:"",
  genre:"",
  developer:"",
  producer:"",
  date:"",
  platform:""
}

export const fieldSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setGenre: (state, action) => {
      state.genre = action.payload
    },
    setProducer: (state, action) => {
        state.producer = action.payload
    },
    setDeveloper: (state, action) => {
        state.developer = action.payload
    },
    setDate: (state, action) => {
        state.date = action.payload
    },
  },
})

export const { setName, setGenre, setProducer, setDeveloper, setDate } = fieldSlice.actions

export default fieldSlice.reducer