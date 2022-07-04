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
let emptyHole = {course: '', date: '', hole1: 0, hole2: 0, hole3: 0, hole4: 0, hole5: 0, hole6: 0, hole7: 0, hole8: 0, hole9: 0, hole10: 0, hole11: 0, hole12: 0, hole13: 0, hole14: 0, hole15: 0, hole16: 0, hole17: 0, hole18: 0}

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
		if (round.weather == "") {
			round.weather = "Weather Not Inputted"
		}
		props.handleCreate(round)
		handleSubmitScoreHoleTotal()
		goHome()
		setRound({course: '', date: '', score: '', weather: ''})
}
const handleSubmitScoreHoleTotal = (event) => {
		holeScore.course = emptyCourse
		holeScore.date = date
		props.handleCreateHoleScore(holeScore)
		dispatch(reset())
		setRound({course: '', date: '', hole1: 0, hole2: 0, hole3: 0, hole4: 0, hole5: 0, hole6: 0, hole7: 0, hole8: 0, hole9: 0, hole10: 0, hole11: 0, hole12: 0, hole13: 0, hole14: 0, hole15: 0, hole16: 0, hole17: 0, hole18: 0})
}


for (let i = 0; i < props.userData.length; i++) {
	if (props.userData[i].course == emptyCourse) {
				holeAvg.push(eval(currentHoleRef))
			}
}

for (let i = 0; i < holeAvg.length; i++) {
  totalShots += holeAvg[i]
}

let averageShots = (totalShots / holeAvg.length)
let averageShotsRounded = averageShots.toFixed(1)

holeAvg.sort(function(a, b){return a-b})

//https://www.w3schools.com/jsref/jsref_sort.asp
let lowestScore = holeAvg[0]

//FIND CURRENT DATE AND ASSIGN TO VARIABLE FOR REFERENCE IN THE VALUE DATE INPUT
//extremely helpful link below
//https://stackoverflow.com/questions/49277112/react-js-how-to-set-a-default-value-for-input-date-type
const currentDate = new Date()
currentDate.setDate(currentDate.getDate())
const date = currentDate.toISOString().substr(0,10)
const toggleReadOnly = () => {
}

const [showCurrentRound, setShowCurrentRound] = useState(false)
const [userStats, setUserStats] = useState(false)
const [showUserSubmitRound, setShowUserSubmitRound] = useState(false)
const [showRoundOptions, setShowRoundOptions] = useState(false)

const showCurrentRoundFunction = () => {
		setShowCurrentRound(true)
		props.currentRoundInProgress2()
}
const goHome = () => {
	setShowCurrentRound(false)
	props.currentRoundInProgress()
}

const showUserStats = () => {
	setUserStats(!userStats)
}
const showSubmitRound = () => {
	setShowUserSubmitRound(!showUserSubmitRound)
}
const roundOptions = () => {
	setShowRoundOptions(!showRoundOptions)
}

return (
			<>

			{showCurrentRound ? null : <div className="container">
				<h2>Golf Score Tracker</h2>
				<h4>Select Your Course Below</h4>
			<label htmlFor="course-names"></label>
				<select name="course-names" id="course-names" onChange={(event) => setEmptyCourse(event.target.value)}>
				{props.courseData.map((course) => {
						return(
								<>
									<option value="" disabled selected hidden>Choose Course...</option>
									<option placeholder="select a course">{course.name}</option>
							</>
						)
					})}
				</select> <button onClick={showCurrentRoundFunction}>Start Round</button> </div>}
				{showCurrentRound ? <>
			{props.courseData.filter((course) => {
				if (course.name == emptyCourse) {
					return course
				}
			}).map((course) => {
          return (
							<div className="container" key={course.id}>
								<h2>{course.name} </h2>
								<h3>Hole # {hole}</h3>
								<h4>Par {eval(currentHolePar)} || {eval(currentHoleYardage)} Yards </h4>
								<h4>Current Score on hole #{hole} is: {score} </h4>

								{overUnderParRound < 0 && hole > 1 ? <h4>You are {overUnderParRound} under par.</h4> : null}
								{overUnderParRound == 0 && hole > 1 ? <h4>You are even to par.</h4> : null}
								{overUnderParRound > 0 && hole > 1 ? <h4>You are {overUnderParRound} over par.</h4> : null}
								{hole> 17 ? <button onClick={showSubmitRound}>Confirm Details and Submit Round</button> : null }
								<br/>
								<br/>
								{!userStats ? <button onClick={showUserStats}> Show User Stats</button> : null}
								{userStats ? <button onClick={showUserStats}> Close User Stats</button> : null}
								<br/>
								<br/>
								<form onSubmit={handleSubmit}>
									{hole > 17 ?
									<div>
										{showUserSubmitRound ? <> <input value={date} onChange={handleChange} id="Date" type="date" name='date'></input>
										<br/>
										<br/>
										<input value={totalScore} onChange={handleChange} type="number" name='score' readOnly></input>
										<br/>
										<br/>
										<input value={course.name} onChange={handleChange} type="text" name='course' readOnly></input>
										<br/>
										<br/>
										<input placeholder="Course Conditions (fair, good, rain, etc.)"type="text" onChange={handleChange} defaultValue=
										"Normal Weather" value={round.weather} name='weather'></input>
										<br/>
										<br/>
									<input type="submit"></input>
									<br/>
									<br/>
									<button onClick={showSubmitRound}>Close Details</button> </> : null }
									</div> : null}
								</form>
						</div>
					)
				})} </>: null}

				{showCurrentRound && userStats ? <div className="container">
				<h1>You Average {averageShotsRounded} strokes on this hole</h1>
				<h1>Your Best Score on this hole is {lowestScore}</h1>
				{overUnderPar < 0 ? <h1>You are currently {overUnderPar} for this hole </h1> : null}
				{overUnderPar == 0 ? <h1>You are currently even for this hole </h1> : null}
				{overUnderPar > 0 ? <h1>You are currently {overUnderPar} over for this hole </h1> : null}
				{overUnderParRound < 0 && hole > 1 ? <h1>Total Score for this round is {totalScore}. You are {overUnderParRound} under par.</h1> : null}
				{overUnderParRound == 0 && hole > 1 ? <h1>Total Score for this round is {totalScore}. You are even to par.</h1> : null}

				{overUnderParRound > 0 && hole > 1 ? <h1>Total Score for this round is {totalScore}.</h1> : null}
			</div> : null}
				{showCurrentRound  && !showUserSubmitRound ? <div className="container">
				<button onClick={() => dispatch(increment()) }>Add Stroke</button>
				<button onClick={() => dispatch(decrement()) }>Subtract Stroke</button>
					<br/>
					<br/>
					<form onSubmit={handleChangeHoleScore}>
						<input hidden value={score} name={`${currentHole}`}onChange={handleChangeHoleScore}></input>
						<button type='submit'>Next Hole</button>
					</form>
					<button onClick={() => dispatch(previousHole()) }>Previous Hole</button>
					<br/>
					<br/>
					<button onClick={roundOptions}>Round Options</button>
					<br/>
					<br/>
					{showRoundOptions  ? <> <button onClick={() => dispatch(reset()) }>Restart Round</button>
					<br/>
					<br/>
					<button onClick={goHome} >Quit Round and Go To Home Screen</button> </> : null}
				</div> : null}
				</>
		)
}

export default CurrentRound
