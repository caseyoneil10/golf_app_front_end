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
const currentHole = `hole${hole}`
const currentHoleRef = `props.userData[i].${currentHole}`
const [emptyCourse, setEmptyCourse] = useState('Liberty Lake')


let emptyRound = {course: '', date: '', score: '', weather: ''}
let emptyHole = {course: '', hole1: 0, hole2: 0, hole3: 0, hole4: 0, hole5: 0, hole6: 0, hole7: 0, hole8: 0, hole9: 0, hole10: 0, hole11: 0, hole12: 0, hole13: 0, hole14: 0, hole15: 0, hole16: 0, hole17: 0, hole18: 0}

const [round, setRound] = useState(emptyRound)
const [holeScore, setHoleScore] = useState(emptyHole)
let holeAvg = []
let totalShots = 0

const handleChange = (event) => {
	setRound({...round, [event.target.name]: event.target.value})
	}

const handleChangeHoleScore = (event) => {
	event.preventDefault()
	if (currentHole == 'hole1') {
	holeScore.hole1 = score }
	else if (currentHole == 'hole2') {
		holeScore.hole2 = score
	}
	else if (currentHole == 'hole3') {
		holeScore.hole3 = score
	}
	else if (currentHole == 'hole4') {
		holeScore.hole4 = score
	}
	else if (currentHole == 'hole5') {
		holeScore.hole5 = score
	}
	else if (currentHole == 'hole6') {
		holeScore.hole6 = score
	}
	else if (currentHole == 'hole7') {
		holeScore.hole7 = score
	}
	else if (currentHole == 'hole8') {
		holeScore.hole8 = score
	}
	else if (currentHole == 'hole9') {
		holeScore.hole9 = score
	}
	else if (currentHole == 'hole10') {
		holeScore.hole10 = score
	}
	else if (currentHole == 'hole11') {
		holeScore.hole11 = score
	}
	else if (currentHole == 'hole12') {
		holeScore.hole12 = score
	}
	else if (currentHole == 'hole13') {
		holeScore.hole13 = score
	}
	else if (currentHole == 'hole14') {
		holeScore.hole14 = score
	}
	else if (currentHole == 'hole15') {
		holeScore.hole15 = score
	}
	else if (currentHole == 'hole16') {
		holeScore.hole16 = score
	}
	else if (currentHole == 'hole17') {
		holeScore.hole17 = score
	}
	else if (currentHole == 'hole18') {
		holeScore.hole18 = score
	}
	setHoleScore({...holeScore, [event.target.name]: event.target.value})
	dispatch(nextHole())
	}

const handleSubmit = (event) => {
		event.preventDefault()
		round.course = emptyCourse
		round.date = date
		round.score = totalScore
		props.handleCreate(round)
		handleSubmitScoreHoleTotal()
		setRound({course: '', date: '', score: '', weather: ''})
}
const handleSubmitScoreHoleTotal = (event) => {
		holeScore.course = emptyCourse
		props.handleCreateHoleScore(holeScore)
		dispatch(reset())
		setRound({course: '', hole1: 0, hole2: 0, hole3: 0, hole4: 0, hole5: 0, hole6: 0, hole7: 0, hole8: 0, hole9: 0, hole10: 0, hole11: 0, hole12: 0, hole13: 0, hole14: 0, hole15: 0, hole16: 0, hole17: 0, hole18: 0})
}


for (let i = 0; i < props.userData.length; i++) {
	if (props.userData[i].course == emptyCourse) {
				holeAvg.push(eval(currentHoleRef))
				console.log(holeAvg);
			}
}

for (let i = 0; i < holeAvg.length; i++) {
  totalShots += holeAvg[i]
	console.log(totalShots)
}

let averageShots = (totalShots / holeAvg.length)


console.log(averageShots)

holeAvg.sort(function(a, b){return a-b})
console.log(holeAvg)

//https://www.w3schools.com/jsref/jsref_sort.asp
let lowestScore = holeAvg[0]
console.log(lowestScore)

//FIND CURRENT DATE AND ASSIGN TO VARIABLE FOR REFERENCE IN THE VALUE DATE INPUT
//extremely helpful link below
//https://stackoverflow.com/questions/49277112/react-js-how-to-set-a-default-value-for-input-date-type
const currentDate = new Date()
currentDate.setDate(currentDate.getDate())
const date = currentDate.toISOString().substr(0,10)
const toggleReadOnly = () => {
}

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
								<form onSubmit={handleSubmit}>
									{hole > 0 ?
									<div>
									<input value={date} onChange={handleChange} id="Date" type="date" name='date'></input>
									<input value={totalScore} onChange={handleChange}  name='score' readOnly></input>
									<input value={course.name} onChange={handleChange}  name='course' readOnly></input>
									<input placeholder="Course Conditions (fair, good, rain, etc.)" onChange={handleChange} value={round.weather} name='weather'></input>
									<input type="submit"></input>
									</div> : null}
								</form>
						</div>
					)
				})}
				<form onSubmit={handleChangeHoleScore}>
					<input value={score} name={`${currentHole}`}onChange={handleChangeHoleScore}></input>
					<input type='submit' value='Next Hole'></input>
				</form>
				<h1>Current Score for this hole is: {score} </h1>
				<h1>You Average {averageShots} strokes on this hole.</h1>
				<h1>Your Best Score on this hole is {lowestScore}</h1>
				{overUnderPar < 0 ? <h1>You are currently {overUnderPar} for this hole </h1> : null}
				{overUnderPar == 0 ? <h1>You are currently even for this hole </h1> : null}
				{overUnderPar > 0 ? <h1>You are currently {overUnderPar} over for this hole </h1> : null}
				<h1>Hole # {hole}</h1>
				<button onClick={() => dispatch(previousHole()) }>Previous Hole</button>
				{overUnderParRound < 0 && hole > 1 ? <h1>Total Score for this round is {totalScore}. You are {overUnderParRound} under par.</h1> : null}
				{overUnderParRound == 0 && hole > 1 ? <h1>Total Score for this round is {totalScore}. You are even to par.</h1> : null}
				{overUnderParRound > 0 && hole > 1 ? <h1>Total Score for this round is {totalScore}. You are {overUnderParRound} over par.</h1> : null}
	      <button onClick={() => dispatch(increment()) }>Add Stroke</button>
	      <button onClick={() => dispatch(decrement()) }>Subtract Stroke</button>
	      <button onClick={() => dispatch(reset()) }>Restart Round</button>
				</>
		)
}

export default CurrentRound
