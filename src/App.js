import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'

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



  const { score, totalScore, hole } = useSelector(state => state.scoreTotal)

  // let currentYardage = course.hole + hole + 'Yardage'
  // console.log(currentYardage);

  const dispatch = useDispatch()
    return (
    <>
      <HomeScreen courseData={courseData}/>
      <CurrentRound courseData={courseData}/>
    </>
    )
}


export default App
