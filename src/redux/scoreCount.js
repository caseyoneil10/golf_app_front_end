import { createSlice } from '@reduxjs/toolkit'

export const scoreCounterSlice = createSlice({
  name: 'score_plus_minus',
  initialState: {
    score: 0,
    totalScore: 0,
    hole: 1,
    overUnderPar: 0,
    overUnderParRound: 0,
    par: 4,
    course: ''
  },
  reducers: {
    increment: state => {
      state.totalScore += 1
      state.score += 1
      state.overUnderPar = (state.score - state.par)
    },
    decrement: state => {
      state.totalScore -= 1
      state.score -= 1
      state.overUnderPar = (state.score - state.par)
    },
    reset: state => {
      state.score = 0
      state.totalScore = 0
      state.hole = 1
      state.overUnderPar = 0
      state.overUnderParRound = 0
    },
    nextHole: state => {
			if (state.hole == 18) {
			state.hole = 1 }
      else if (state.score == 0 ) {
        alert("Enter a Score to proceed to the next hole!")
      }
		  else {  state.overUnderParRound += (state.score - state.par)
       state.hole += 1
       state.score = 0
       state.overUnderPar = 0
    }
	},
		previousHole: state => {
		if (state.hole == 1) {
			return
		} else {
			state.hole -= 1}
	}
  }
})

export const { increment, decrement, reset, nextHole, previousHole } = scoreCounterSlice.actions

export default scoreCounterSlice.reducer
