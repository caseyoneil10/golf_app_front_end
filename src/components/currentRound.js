import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { nextHole } from '../redux/scoreCount'
import { previousHole } from '../redux/scoreCount'
import { reset } from '../redux/scoreCount'
import { increment } from '../redux/scoreCount'
import { decrement } from '../redux/scoreCount'

const CurrentRound = (props) => {

const { score, totalScore, hole, overUnderParRound, overUnderPar } = useSelector(state => state.scoreTotal)
const dispatch = useDispatch()

		return (
			<>
			{props.courseData.map((course) => {
          return(
						<>
								<h1>Current Round at {course.name} </h1>
								<h1>Yardage: {course.hole1Yardage} </h1>
								<h1>Par: {course.hole1Par} </h1>
						</>
					)
				})}

				<h1>Current Score for this hole is: {score} you are currently {overUnderPar} for this hole </h1>
				<h1>Hole # {hole}</h1>
				<button onClick={() =>dispatch(nextHole()) }>Next Hole</button>
				<button onClick={() =>dispatch(previousHole()) }>Previous Hole</button>
				<h1>Total Score for this round is: {totalScore} you are {overUnderParRound} to par</h1>
	      <button onClick={() =>dispatch(increment()) }>Add Stroke</button>
	      <button onClick={() =>dispatch(decrement()) }>Subtract Stroke</button>
	      <button onClick={() =>dispatch(reset()) }>Restart Round</button>

			</>

		)

}


export default CurrentRound
