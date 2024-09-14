import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './slices/fieldSlice.js'
import findReducer from './slices/findSlice.js'

export const store = configureStore({
  reducer: {
    game: gameReducer,
    find: findReducer,
  },
})