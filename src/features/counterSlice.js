import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  quotes: null,
}
export const quoteSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    randomQoutes: (state, action) => {
      state.quotes = action.payload
    },
  },
})
export const { randomQoutes } = quoteSlice.actions
export const selectCount = (state) => state.quotes.quotes
export default quoteSlice.reducer
