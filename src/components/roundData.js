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
			editForm()
		}

		const [showEditForm, setShowEditFrom] = useState(false)
		const editForm = () => {
			setShowEditFrom(!showEditForm)
		}

	return (
		<div className="container">
						<h2 className="boldh1" id="mainTitle">{props.round.course}</h2>
						<h3>Date: {props.round.date}</h3>
						<h3>Score: {props.round.score}</h3>
						<h4>Weather: {props.round.weather}</h4>
						{showEditForm ?<> <form onSubmit={handleSubmit}>
							Course<br/><input className="button cursor" type="text" name="course" defaultValue={props.round.course} onChange={handleChange}></input>
							<br/>
							Date	<br/><input className="button cursor" type="date" name="date" defaultValue={props.round.date} onChange={handleChange}></input>
							<br/>
							Weather	<br/><input className="button cursor" type="text" name="weather" defaultValue={props.round.weather} onChange={handleChange}></input>
							<br/>
							Score	<br/><input className="button cursor" type="number" name="score" defaultValue={props.round.score} onChange={handleChange}></input>
							<br/>
							<br/>
							<button className="button danger1" type="submit">Submit Changes</button>
						</form> <button className="button danger4" onClick={() => {
                        props.handleDeleteRound(props.round
                        )
                      }}>Delete Round
                      </button> <br/><br/> </> : null}
						{!showEditForm ? <button className="button danger2" onClick={editForm}>Edit Round</button> : null}
						{showEditForm ? <button className="button danger3" onClick={editForm}>Close Edit</button> : null}

						<br/>
		</div>
	)
}

export default RoundData
