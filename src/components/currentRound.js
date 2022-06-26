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
const currentHoleYardage = `course.hole${hole}Yardage`
const currentHolePar = `course.hole${hole}Par`
const [emptyCourse, setEmptyCourse] = useState('Liberty Lake')
		return (
			<>
			<h1>Select Your Course Below</h1>
			<label htmlFor="course-names"></label>
				<select name="course-names" id="course-names" onChange={(event) => setEmptyCourse(event.target.value)}>
				{props.courseData.map((course) => {
						return(
								<>
									<option>{course.name}</option>
							</>
						)
					})}
				</select>
			{props.courseData.filter((course) => {
				if (course.name == emptyCourse) {
					return course
				}
			}).map((course) => {
          return(
						<div key={course.id}>
								<h1>Current Round at {course.name} </h1>
								<h1>Par: {eval(currentHolePar)} </h1>
								<h1>Yardage: {eval(currentHoleYardage)} </h1>
						</div>
					)
				})}
				<h1>Current Score for this hole is: {score} </h1>
				{overUnderPar < 0 ? <h1>You are currently {overUnderPar} for this hole </h1> : null}
				{overUnderPar == 0 ? <h1>You are currently even for this hole </h1> : null}
				{overUnderPar > 0 ? <h1>You are currently {overUnderPar} over for this hole </h1> : null}

				<h1>Hole # {hole}</h1>

				<button onClick={() =>dispatch(nextHole()) }>Next Hole</button>
				<button onClick={() =>dispatch(previousHole()) }>Previous Hole</button>
				{overUnderParRound < 0 && hole > 1 ? <h1>Total Score for this round is {totalScore}. You are {overUnderParRound} under par.</h1> : null}
				{overUnderParRound == 0 && hole > 1 ? <h1>Total Score for this round is {totalScore}. You are even to par.</h1> : null}
				{overUnderParRound > 0 && hole > 1 ? <h1>Total Score for this round is {totalScore}. You are {overUnderParRound} over par.</h1> : null}
	      <button onClick={() =>dispatch(increment()) }>Add Stroke</button>
	      <button onClick={() =>dispatch(decrement()) }>Subtract Stroke</button>
	      <button onClick={() =>dispatch(reset()) }>Restart Round</button>
				</>
		)
}

export default CurrentRound
