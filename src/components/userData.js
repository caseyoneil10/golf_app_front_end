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
	return (
		<>
			<h1>List of User Rounds</h1>

						<h2>Course: {props.round.course}</h2>
						<h2>Hole 1: {props.round.hole1}</h2>
						<h2>Hole 2: {props.round.hole2}</h2>
						<h2>Hole 3: {props.round.hole3}</h2>
						<h2>Hole 4: {props.round.hole4}</h2>
						<h2>Hole 5: {props.round.hole5}</h2>
						<h2>Hole 6: {props.round.hole6}</h2>
						<h2>Hole 7: {props.round.hole7}</h2>
						<h2>Hole 8: {props.round.hole8}</h2>
						<h2>Hole 9: {props.round.hole9}</h2>
						<h2>Hole 10: {props.round.hole10}</h2>
						<h2>Hole 11: {props.round.hole11}</h2>
						<h2>Hole 12: {props.round.hole12}</h2>
						<h2>Hole 13: {props.round.hole13}</h2>
						<h2>Hole 14: {props.round.hole14}</h2>
						<h2>Hole 15: {props.round.hole15}</h2>
						<h2>Hole 16: {props.round.hole16}</h2>
						<h2>Hole 17: {props.round.hole17}</h2>
						<h2>Hole 18: {props.round.hole18}</h2>
						<form onSubmit={handleSubmit}>
						<input type="text" name="course" defaultValue={props.round.course} onChange={handleChange}></input>
						<input type="number" name="hole1" defaultValue={props.round.hole1} onChange={handleChange}></input>
						<input type="number" name="hole2" defaultValue={props.round.hole2} onChange={handleChange}></input>
						<input type="number" name="hole3" defaultValue={props.round.hole3} onChange={handleChange}></input>
						<input type="number" name="hole4" defaultValue={props.round.hole4} onChange={handleChange}></input>
						<input type="number" name="hole5" defaultValue={props.round.hole5} onChange={handleChange}></input>
						<input type="number" name="hole6" defaultValue={props.round.hole6} onChange={handleChange}></input>
						<input type="number" name="hole7" defaultValue={props.round.hole7} onChange={handleChange}></input>
						<input type="number" name="hole8" defaultValue={props.round.hole8} onChange={handleChange}></input>
						<input type="number" name="hole9" defaultValue={props.round.hole9} onChange={handleChange}></input>
						<input type="number" name="hole10" defaultValue={props.round.hole10} onChange={handleChange}></input>
						<input type="number" name="hole11" defaultValue={props.round.hole11} onChange={handleChange}></input>
						<input type="number" name="hole12" defaultValue={props.round.hole12} onChange={handleChange}></input>
						<input type="number" name="hole13" defaultValue={props.round.hole13} onChange={handleChange}></input>
						<input type="number" name="hole14" defaultValue={props.round.hole14} onChange={handleChange}></input>
						<input type="number" name="hole15" defaultValue={props.round.hole15} onChange={handleChange}></input>
						<input type="number" name="hole16" defaultValue={props.round.hole16} onChange={handleChange}></input>
						<input type="number" name="hole17" defaultValue={props.round.hole17} onChange={handleChange}></input>
						<input type="number" name="hole18" defaultValue={props.round.hole18} onChange={handleChange}></input>

						<input type="submit" value="Submit Changes"></input>
						</form>
						<button onClick={() => {
                        props.handleDeleteRoundDetail(props.round
                        )
                      }}>Delete Round
                      </button>
					</>
		)
}

export default UserData
