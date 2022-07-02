import React, { useState, useEffect } from 'react'

const RoundData = (props) => {

	const [roundTotalData, setRoundTotalData] = useState({...props.round})

		const handleChange = (event) => {
			setRoundTotalData({...roundTotalData, [event.target.name]: event.target.value})
		}

		const handleSubmit = (event) => {
			event.preventDefault()
			console.log(roundTotalData);
			props.handleUpdateRoundTotal(roundTotalData)
		}

	return (
		<>
			<h1>Round Name</h1>

						<h2>Course: {props.round.course}</h2>
						<h2>Date: {props.round.date}</h2>
						<h2>Weather: {props.round.weather}</h2>
						<h2>Score: {props.round.score}</h2>
						<h2>ID: {props.round.id}</h2>

						<form onSubmit={handleSubmit}>
						<input type="text" name="course" defaultValue={props.round.course} onChange={handleChange}></input>
						<input type="date" name="date" defaultValue={props.round.date} onChange={handleChange}></input>
						<input type="text" name="weather" defaultValue={props.round.weather} onChange={handleChange}></input>
						<input type="number" name="score" defaultValue={props.round.score} onChange={handleChange}></input>
						<input type="submit" value="Submit Changes"></input>
						</form>

						<button onClick={() => {
                        props.handleDeleteRound(props.round
                        )
                      }}>Delete Round
                      </button>
						<br/>
		</>
	)
}

export default RoundData
