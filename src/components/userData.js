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
			editRound()
		}

		const [showEditRound, setShowEditRound] = useState(false)
		const [showEditHole, setShowEditHole] = useState(false)
		const [showHoleDetail, setShowHoleDetail] = useState(false)

		const editRound = () => {
			setShowEditRound(!showEditRound)
		}
		const editHole = () => {
			setShowEditHole(!showEditHole)
		}
		const holes = () => {
			setShowHoleDetail(!showHoleDetail)
		}
		const [query, setQuery] = useState("")


	return (
		<div>
						<h2 id="mainTitle">{props.round.course}</h2>
						<h3>Date: {props.round.date}</h3>
						{!showHoleDetail ? <button onClick={holes} className="button danger1">Expand Details</button> : null}
						{showHoleDetail ? <button onClick={holes} className="button danger2">Close Details</button> : null}
						{showHoleDetail ? <>
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
						<h4>Hole 18: {props.round.hole18}</h4> </> : null}
						{!showEditRound ? <button className="danger2" onClick={editRound}>Edit Round</button> : null }
						{showEditRound ? <>
							<br/>
							<br/>
							{!showEditHole ? <><button onClick={editHole} className="button danger">Edit Individual Holes</button>
							<br/>
							<br/> </> : null}
							{showEditHole ? <> <button onClick={editHole} className="button danger smaller">Close Edit Holes</button></> : null}
							<form onSubmit={handleSubmit}>
						<h4>Course</h4><input className="cursor button" type="text" name="course" defaultValue={props.round.course} onChange={handleChange}></input>
						<br/>
						<h4>Date</h4><input className="button cursor" type="date" name="date" defaultValue={props.round.date} onChange={handleChange}></input>
						<br/>
						<br/>
						{showEditHole ? <>
						<h4>Hole 1</h4><input className="button cursor" type="number" name="hole1" defaultValue={props.round.hole1} onChange={handleChange}></input>
							<br/>
						<h4>Hole 2</h4><input className="button cursor" type="number" name="hole2" defaultValue={props.round.hole2} onChange={handleChange}></input>
							<br/>
						<h4>Hole 3</h4><input className="button cursor" type="number" name="hole3" defaultValue={props.round.hole3} onChange={handleChange}></input>
							<br/>
						<h4>Hole 4</h4><input className="button cursor" type="number" name="hole4" defaultValue={props.round.hole4} onChange={handleChange}></input>
							<br/>
						<h4>Hole 5</h4><input className="button cursor" type="number" name="hole5" defaultValue={props.round.hole5} onChange={handleChange}></input>
							<br/>
						<h4>Hole 6</h4><input className="button cursor" type="number" name="hole6" defaultValue={props.round.hole6} onChange={handleChange}></input>
							<br/>
						<h4>Hole 7</h4><input className="button cursor" type="number" name="hole7" defaultValue={props.round.hole7} onChange={handleChange}></input>
							<br/>
						<h4>Hole 8</h4><input className="button cursor" type="number" name="hole8" defaultValue={props.round.hole8} onChange={handleChange}></input>
							<br/>
						<h4>Hole 9</h4><input className="button cursor" type="number" name="hole9" defaultValue={props.round.hole9} onChange={handleChange}></input>
							<br/>
						<h4>Hole 10</h4><input className="button cursor" type="number" name="hole10" defaultValue={props.round.hole10} onChange={handleChange}></input>
							<br/>
					  <h4>Hole 11</h4><input className="button cursor" type="number" name="hole11" defaultValue={props.round.hole11} onChange={handleChange}></input>
							<br/>
						<h4>Hole 12</h4><input className="button cursor" type="number" name="hole12" defaultValue={props.round.hole12} onChange={handleChange}></input>
							<br/>
						<h4>Hole 13</h4><input className="button cursor" type="number" name="hole13" defaultValue={props.round.hole13} onChange={handleChange}></input>
							<br/>
						<h4>Hole 14</h4><input className="button cursor" type="number" name="hole14" defaultValue={props.round.hole14} onChange={handleChange}></input>
							<br/>
					<h4>Hole 15</h4><input className="button cursor" type="number" name="hole15" defaultValue={props.round.hole15} onChange={handleChange}></input>
							<br/>
						<h4>Hole 16</h4><input className="button cursor" type="number" name="hole16" defaultValue={props.round.hole16} onChange={handleChange}></input>
							<br/>
						<h4>Hole 17</h4><input className="button cursor" type="number" name="hole17" defaultValue={props.round.hole17} onChange={handleChange}></input>
							<br/>
						<h4>Hole 18</h4><input className="button cursor" type="number" name="hole18" defaultValue={props.round.hole18} onChange={handleChange}></input>
							<br/>
							<br/>
					</> : null}
							<button className="button danger" onClick={editRound}>Close Editing</button>
							<br/>
							<br/>
							<button className="button danger2" onClick={() => {
	                        props.handleDeleteRoundDetail(props.round
	                        )
	                      }}>Delete Round
	                      </button>

						<button className="button button-primary" type="submit">Submit Changes</button>
						</form> </> : null }

					</div>
		)
}

export default UserData
