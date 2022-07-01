import React, { useState, useEffect } from 'react'

const RoundData = (props) => {

	return (
		<>
			{props.roundData.map((round) => {
				return (
					<>
						<h1>Round Name</h1>
						<h2>{round.course}</h2>
						<h2>{round.date}</h2>
						<h2>{round.weather}</h2>
						<h2>{round.score}</h2>
					</>
				)
			})}
		</>
	)
}

export default RoundData
