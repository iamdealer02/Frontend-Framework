// src/app/store.js
import { configureStore } from '@reduxjs/toolkit'
import languageReducer from '../features/languageSlice'

export const store = configureStore({
  reducer: {
    language: languageReducer
  }
})
