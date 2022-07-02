import React, { useState, useEffect } from 'react'

const UserData = (props) => {

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
