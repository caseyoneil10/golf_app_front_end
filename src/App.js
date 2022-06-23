import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { increment } from './redux/scoreCount'
import { decrement } from './redux/scoreCount'


const App = () => {
  const { score } = useSelector(state => state.scoreTotal)
  const dispatch = useDispatch()
    return (
      <>
    <h1>Your Current Score is: {score}</h1>
    <button onClick={() =>dispatch(increment()) }>Add Stroke</button>
    <button onClick={() =>dispatch(decrement()) }>Subtract Stroke</button>

      </>
    )
}


export default App
