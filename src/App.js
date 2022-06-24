import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { increment } from './redux/scoreCount'
import { decrement } from './redux/scoreCount'
import CurrentRound from './components/currentRound'
import HomeScreen from './components/homeScreen'
import axios from 'axios'




const App = () => {

  const [courseData, setCourseData] = useState([])

    const getCourseData = () => {
      axios
      .get('https://golf-app-backend.herokuapp.com/api/courses')
      .then(response => setCourseData(response.data),
      (err) => console.error(err)
    )
      .catch((error) => console.error(error))
    }

    useEffect(() => {
      getCourseData()
    }, [])



  const { score } = useSelector(state => state.scoreTotal)

  const dispatch = useDispatch()
    return (
    <>
      <HomeScreen/>
      <CurrentRound/>
      <h1>Your Current Score for this hole is: {score}</h1>
      <h1>Your Total Score for this round is: {score}</h1>
      <button onClick={() =>dispatch(increment()) }>Add Stroke</button>
      <button onClick={() =>dispatch(decrement()) }>Subtract Stroke</button>

      {courseData.map((course) => {
          return(
            <div>
            <h3>Name: {course.name}</h3>
            <h3>Slope Rating: {course.slopeRating}</h3>
            <h3>Course Rating: {course.courseRating}</h3>
            </div>
          )})}
    </>
    )
}


export default App
