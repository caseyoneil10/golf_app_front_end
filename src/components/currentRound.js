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
let roundBestScores = []
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

for (let i = 0; i < props.roundData.length; i++) {
	if (props.roundData[i].course == emptyCourse) {
				roundBestScores.push(props.roundData[i].score)
			}
}



for (let i = 0; i < holeAvg.length; i++) {
  totalShots += holeAvg[i]
}

let averageShots = (totalShots / holeAvg.length)
let averageShotsRounded = averageShots.toFixed(1)

holeAvg.sort(function(a, b){return a-b})
roundBestScores.sort(function(a, b){return a-b})

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
const resetRound = () => {
	setShowRoundOptions(!showRoundOptions)
	dispatch(reset())
}

return (
			<>

			{showCurrentRound ? null : <div className="container">
				<h2 id='mainTitle'>Golf Score Tracker</h2>
				<img width='100px' height= '100px' src='https://freepngclipart.com/download/golf/11400-crossed-golf-club-images-image-png.png'/>
				<h4 id="mainTitle2">Select Your Course Below</h4>
			<label htmlFor="course-names"></label>
				<select name="course-names" id="course-names" onChange={(event) => setEmptyCourse(event.target.value)}>
				{props.courseData.map((course) => {
						return(
								<>
									<option disabled selected hidden>Choose a Course...</option>
									<option placeholder="select a course">{course.name}</option>
							</>
						)
					})}
				</select><br/><br/> <button className="button-primary" onClick={showCurrentRoundFunction}>Start Round</button> </div>}
				{showCurrentRound ? <>
			{props.courseData.filter((course) => {
				if (course.name == emptyCourse) {
					return course
				}
			}).map((course) => {
          return (
							<div className="container" key={course.id}>
								<h2 id="mainTitle">{course.name} </h2>

								<h2>Hole # {hole}</h2>

								<h3>Par {eval(currentHolePar)} || {eval(currentHoleYardage)} Yards </h3>

								{score > eval(currentHolePar) ? <> <h3>Current Score on hole {hole} <br/> <span id="scoreOver">{score}</span> </h3> </> : null}

								{score < eval(currentHolePar) ? <> <h3>Current Score on hole {hole} <br/> <span id="scoreUnder">{score}</span> </h3> </> : null}

								{score == eval(currentHolePar) ? <> <h3>Current Score on hole {hole} <br/> <span id="scoreEqual">{score}</span> </h3> </> : null}

								{overUnderParRound < 0 && hole > 1 ? <h4>You are {overUnderParRound} under par.</h4> : null}

								{overUnderParRound == 0 && hole > 1 ? <h4>You are even to par.</h4> : null}
								{overUnderParRound > 0 && hole > 1 ? <h4>You are {overUnderParRound} over par.</h4> : null}

								{!userStats &&! showUserSubmitRound ? <button className="button danger" onClick={showUserStats}> Show User Stats</button> : null}

								{userStats ? <button className="button danger" onClick={showUserStats}> Close User Stats</button> : null}

								<form onSubmit={handleSubmit}>
									{hole > 17 ?
									<div>
									{showUserSubmitRound ? <> <h5>Date</h5><input value={date} onChange={handleChange} id="Date" type="date" name='date'></input>
										<br/>
										<br/>
										<h5>TOTAL SCORE</h5><input value={totalScore} onChange={handleChange} type="number" name='score' readOnly></input>
										<br/>
										<br/>
										<h5>Course</h5><input value={course.name} onChange={handleChange} type="text" name='course' readOnly></input>
										<br/>
										<br/>
										<h5>Weather Conditions</h5><input placeholder="Course Conditions (fair, good, rain, etc.)"type="text" onChange={handleChange} defaultValue=
										"Normal Weather" value={round.weather} name='weather'></input>
										<br/>
										<br/>
									<input className="button-primary" type="submit"></input>
									<br/>
									<br/>
									<button className="button danger2" onClick={showSubmitRound}>Back</button> </> : null }
									</div> : null}
								</form>
						</div>
					)
				})} </>: null}
				{showCurrentRound && userStats ? <div className="container stats">
				<h1 className="boldh1">Average Strokes This Hole <span id="score"><br/>{averageShotsRounded}</span> </h1>
				<h1 className="boldh1">Best Score on This Hole<br/> <span id="score">{lowestScore}</span></h1>
				<h1 className="boldh1">Best Round<br/> <span id="score">{roundBestScores[0]}</span></h1>
				{overUnderPar < 0 ? <h1>You are <span id='under'> {overUnderPar}   </span>  for this hole </h1> : null}
				{overUnderPar == 0 ? <h1>You are <span id="even">EVEN</span> for this hole </h1> : null}
				{overUnderPar > 0 ? <h1>You are <span id="over">{overUnderPar}</span> over for this hole </h1> : null}
				{overUnderParRound < 0 && hole > 1 ? <h1>Total Score for this round is {totalScore}. You are {overUnderParRound} under par.</h1> : null}
				{overUnderParRound == 0 && hole > 1 ? <h1>Total Score for this round is {totalScore}. You are even to par.</h1> : null}

				{overUnderParRound > 0 && hole > 1 ? <h1>Total Score for this round is {totalScore}.</h1> : null}
			</div> : null}
				{showCurrentRound  && !showUserSubmitRound ? <div className="container">
				<button className="button danger1" onClick={() => dispatch(increment()) }>Add Stroke</button>
				<br/>
				<br/>
				<button className="button danger2" onClick={() => dispatch(decrement()) }>Subtract Stroke</button>
					<br/>
					<br/>
					<form onSubmit={handleChangeHoleScore}>
						<input hidden value={score} name={`${currentHole}`}onChange={handleChangeHoleScore}></input>
						<button className="button danger1" type='submit'>Next Hole</button>
					</form>
					<button className="button danger2" onClick={() => dispatch(previousHole()) }>Previous Hole</button>
					<br/>
					<br/>
						{hole > 17 && !showUserSubmitRound ? <> <button className="button-primary" onClick={showSubmitRound}>Submit Round </button> <br/> <br/> </> : null }

					<button className="button danger" onClick={roundOptions}>Round Options</button>
					<br/>
					<br/>

					{showRoundOptions  ? <> <button className="button" onClick={resetRound}>Restart Round</button>
					<br/>
					<br/>
					<button className="button" onClick={goHome} >Quit Round and Go Home </button> </> : null}
				</div> : null}
				</>
		)
}

export default CurrentRound
