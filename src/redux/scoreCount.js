import { createSlice } from '@reduxjs/toolkit'

export const scoreCounterSlice = createSlice({
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
    }
  }
})


export const anythingCounterSlice = createSlice({
  name: 'score_plus_minus',
  initialState: {
    score: 5
  },
  reducers: {
    increment: state => {
      state.score += 4
    },
    decrement: state => {
      state.score -= 4
    }
  }
})

export const { increment, decrement } = scoreCounterSlice.actions

export default scoreCounterSlice.reducer
