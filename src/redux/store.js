import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './slices/fieldSlice.js'

export const store = configureStore({
  reducer: {
    game: gameReducer
  },
})