import React, { useState, useEffect } from 'react'

const UserData = (props) => {

	return (
		<>
			{props.userData.map((data) => {
				return (
					<>
						<h1>Round Name</h1>
						<h2>{data.course}</h2>
						<h2>{data.hole1}</h2>
						<h2>{data.hole2}</h2>
						<h2>{data.hole3}</h2>
						<h2>{data.hole4}</h2>
						<h2>{data.hole5}</h2>
						<h2>{data.hole6}</h2>
						<h2>{data.hole7}</h2>
						<h2>{data.hole8}</h2>
						<h2>{data.hole9}</h2>
						<h2>{data.hole10}</h2>
						<h2>{data.hole11}</h2>
						<h2>{data.hole12}</h2>
						<h2>{data.hole13}</h2>
						<h2>{data.hole14}</h2>
						<h2>{data.hole15}</h2>
						<h2>{data.hole16}</h2>
						<h2>{data.hole17}</h2>
						<h2>{data.hole18}</h2>
					</>
				)
			})}
		</>
	)
}

export default UserData
