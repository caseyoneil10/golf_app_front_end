import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'score_plus_minus',
  initialState: {
    score: 0
  },
  reducers: {
    increment: state => {
      state.score += 1
    },
    decrement: state => {
      state.score -= 1
    },
    incrementByAmount: (state, action) => {
      state.score += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
