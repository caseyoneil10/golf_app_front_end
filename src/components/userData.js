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
			{props.userData.map((data) => {
				return (
					<>
						<h2>Course: {data.course}</h2>
						<h2>Hole 1: {data.hole1}</h2>
						<h2>Hole 2: {data.hole2}</h2>
						<h2>Hole 3: {data.hole3}</h2>
						<h2>Hole 4: {data.hole4}</h2>
						<h2>Hole 5: {data.hole5}</h2>
						<h2>Hole 6: {data.hole6}</h2>
						<h2>Hole 7: {data.hole7}</h2>
						<h2>Hole 8: {data.hole8}</h2>
						<h2>Hole 9: {data.hole9}</h2>
						<h2>Hole 10: {data.hole10}</h2>
						<h2>Hole 11: {data.hole11}</h2>
						<h2>Hole 12: {data.hole12}</h2>
						<h2>Hole 13: {data.hole13}</h2>
						<h2>Hole 14: {data.hole14}</h2>
						<h2>Hole 15: {data.hole15}</h2>
						<h2>Hole 16: {data.hole16}</h2>
						<h2>Hole 17: {data.hole17}</h2>
						<h2>Hole 18: {data.hole18}</h2>
						<form onSubmit={handleSubmit}>
						<input type="text" name="course" defaultValue={data.course} onChange={handleChange}></input>
						<input type="number" name="hole1" defaultValue={data.hole1} onChange={handleChange}></input>
						<input type="number" name="hole2" defaultValue={data.hole2} onChange={handleChange}></input>
						<input type="number" name="hole3" defaultValue={data.hole3} onChange={handleChange}></input>
						<input type="number" name="hole4" defaultValue={data.hole4} onChange={handleChange}></input>
						<input type="number" name="hole5" defaultValue={data.hole5} onChange={handleChange}></input>
						<input type="number" name="hole6" defaultValue={data.hole6} onChange={handleChange}></input>
						<input type="number" name="hole7" defaultValue={data.hole7} onChange={handleChange}></input>
						<input type="number" name="hole8" defaultValue={data.hole8} onChange={handleChange}></input>
						<input type="number" name="hole9" defaultValue={data.hole9} onChange={handleChange}></input>
						<input type="number" name="hole10" defaultValue={data.hole10} onChange={handleChange}></input>
						<input type="number" name="hole11" defaultValue={data.hole11} onChange={handleChange}></input>
						<input type="number" name="hole12" defaultValue={data.hole12} onChange={handleChange}></input>
						<input type="number" name="hole13" defaultValue={data.hole13} onChange={handleChange}></input>
						<input type="number" name="hole14" defaultValue={data.hole14} onChange={handleChange}></input>
						<input type="number" name="hole15" defaultValue={data.hole15} onChange={handleChange}></input>
						<input type="number" name="hole16" defaultValue={data.hole16} onChange={handleChange}></input>
						<input type="number" name="hole17" defaultValue={data.hole17} onChange={handleChange}></input>
						<input type="number" name="hole18" defaultValue={data.hole18} onChange={handleChange}></input>

						<input type="submit" value="Submit Changes"></input>
						</form>
						<button onClick={() => {
                        props.handleDeleteRoundDetail(data
                        )
                      }}>Delete Round
                      </button>
					</>
				)
			})}
		</>
	)
}

export default UserData
