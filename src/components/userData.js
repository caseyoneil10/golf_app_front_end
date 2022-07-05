import React, { useState, useEffect } from 'react'

const UserData = (props) => {

	const [roundTotalData, setRoundTotalData] = useState({...props.round})

		const handleChange = (event) => {
			setRoundTotalData({...roundTotalData, [event.target.name]: event.target.value})
		}

		const handleSubmit = (event) => {
			event.preventDefault()
			console.log(roundTotalData);
			props.handleUpdateRoundDetail(roundTotalData)
		}

		const [showEditRound, setShowEditRound] = useState(false)

		const editRound = () => {
			setShowEditRound(!showEditRound)
		}
		const [query, setQuery] = useState("")

	return (
		<div>
						<h2>{props.round.course}</h2>
						<h3>Date: {props.round.date}</h3>
						<h4>Hole 1: {props.round.hole1}</h4>
						<h4>Hole 2: {props.round.hole2}</h4>
						<h4>Hole 3: {props.round.hole3}</h4>
						<h4>Hole 4: {props.round.hole4}</h4>
						<h4>Hole 5: {props.round.hole5}</h4>
						<h4>Hole 6: {props.round.hole6}</h4>
						<h4>Hole 7: {props.round.hole7}</h4>
						<h4>Hole 8: {props.round.hole8}</h4>
						<h4>Hole 9: {props.round.hole9}</h4>
						<h4>Hole 10: {props.round.hole10}</h4>
						<h4>Hole 11: {props.round.hole11}</h4>
						<h4>Hole 12: {props.round.hole12}</h4>
						<h4>Hole 13: {props.round.hole13}</h4>
						<h4>Hole 14: {props.round.hole14}</h4>
						<h4>Hole 15: {props.round.hole15}</h4>
						<h4>Hole 16: {props.round.hole16}</h4>
						<h4>Hole 17: {props.round.hole17}</h4>
						<h4>Hole 18: {props.round.hole18}</h4>
						{!showEditRound ? <button className="danger2" onClick={editRound}>Edit Round</button> : null }
						{showEditRound ? <>
						<form onSubmit={handleSubmit}>
						<br/>
						Course<br/><input type="text" name="course" defaultValue={props.round.course} onChange={handleChange}></input>
						<br/>
						Date<br/><input type="date" name="date" defaultValue={props.round.date} onChange={handleChange}></input>
						<br/>
						Hole 1<br/><input type="number" name="hole1" defaultValue={props.round.hole1} onChange={handleChange}></input>
							<br/>
						Hole 2<br/><input type="number" name="hole2" defaultValue={props.round.hole2} onChange={handleChange}></input>
							<br/>
						Hole 3<br/><input type="number" name="hole3" defaultValue={props.round.hole3} onChange={handleChange}></input>
							<br/>
						Hole 4<br/><input type="number" name="hole4" defaultValue={props.round.hole4} onChange={handleChange}></input>
							<br/>
						Hole 5:<br/><input type="number" name="hole5" defaultValue={props.round.hole5} onChange={handleChange}></input>
							<br/>
						Hole 6<br/><input type="number" name="hole6" defaultValue={props.round.hole6} onChange={handleChange}></input>
							<br/>
						Hole 7<br/><input type="number" name="hole7" defaultValue={props.round.hole7} onChange={handleChange}></input>
							<br/>
						Hole 8<br/><input type="number" name="hole8" defaultValue={props.round.hole8} onChange={handleChange}></input>
							<br/>
						Hole 9<br/><input type="number" name="hole9" defaultValue={props.round.hole9} onChange={handleChange}></input>
							<br/>
						Hole 10<br/><input type="number" name="hole10" defaultValue={props.round.hole10} onChange={handleChange}></input>
							<br/>
					  Hole 11<br/><input type="number" name="hole11" defaultValue={props.round.hole11} onChange={handleChange}></input>
							<br/>
						Hole 12<br/><input type="number" name="hole12" defaultValue={props.round.hole12} onChange={handleChange}></input>
							<br/>
						Hole 13<br/><input type="number" name="hole13" defaultValue={props.round.hole13} onChange={handleChange}></input>
							<br/>
						Hole 14<br/><input type="number" name="hole14" defaultValue={props.round.hole14} onChange={handleChange}></input>
							<br/>
						Hole 15<br/><input type="number" name="hole15" defaultValue={props.round.hole15} onChange={handleChange}></input>
							<br/>
						Hole 16<br/><input type="number" name="hole16" defaultValue={props.round.hole16} onChange={handleChange}></input>
							<br/>
						Hole 17<br/><input type="number" name="hole17" defaultValue={props.round.hole17} onChange={handleChange}></input>
							<br/>
						Hole 18<br/><input type="number" name="hole18" defaultValue={props.round.hole18} onChange={handleChange}></input>
							<br/>
							<button className="danger" onClick={editRound}>Close Editing</button>

							<button className="danger2" onClick={() => {
	                        props.handleDeleteRoundDetail(props.round
	                        )
	                      }}>Delete Round
	                      </button>

						<input className="button-primary" type="submit" value="Submit Changes"></input>
						</form> </> : null }

					</div>
		)
}

export default UserData
