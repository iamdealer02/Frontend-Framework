// src/features/languageSlice.js
import { createSlice } from '@reduxjs/toolkit'

const languageSlice = createSlice({
  name: 'language',
  initialState: 'en',
  reducers: {
    setLanguage: (state, action) => action.payload
  }
})

export const { setLanguage } = languageSlice.actions
export default languageSlice.reducer
