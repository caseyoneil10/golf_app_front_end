import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'

import CurrentRound from './components/currentRound'
import HomeScreen from './components/homeScreen'
import RoundData from './components/roundData'
import UserData from './components/userData'
import axios from 'axios'




const App = () => {

  const [courseData, setCourseData] = useState([])
  const [roundData, setRoundData] = useState([])
  const [userData, setUserData] = useState([])

    //GET COURSE DATA
    const getCourseData = () => {
      axios
      .get('https://golf-app-backend.herokuapp.com/api/courses')
      .then(response => setCourseData(response.data),
      (err) => console.error(err)
    )
      .catch((error) => console.error(error))
    }
    const getRoundData = () => {
      axios
      .get('https://golf-app-backend.herokuapp.com/api/scores')
      .then(response => setRoundData(response.data),
      (err) => console.error(err)
    )
      .catch((error) => console.error(error))
    }
    const getUserData = () => {
      axios
      .get('https://golf-app-backend.herokuapp.com/api/holescore')
      .then(response => setUserData(response.data),
      (err) => console.error(err)
    )
      .catch((error) => console.error(error))
    }

    //CREATE NEW ROUND RECORD
    const handleCreate = (addRound) => {
  axios.post('https://golf-app-backend.herokuapp.com/api/scores', addRound)
  .then(response => {
    setRoundData([...roundData, response.data])
  })
}


    useEffect(() => {
      getCourseData()
      getRoundData()
      getUserData()
    }, [])



  const { score, totalScore, hole } = useSelector(state => state.scoreTotal)

  // let currentYardage = course.hole + hole + 'Yardage'
  // console.log(currentYardage);

  const dispatch = useDispatch()
    return (
    <>
      <HomeScreen courseData={courseData}/>
      <CurrentRound handleCreate={handleCreate} courseData={courseData}/>
      <RoundData roundData={roundData}/>
      <UserData userData={userData}/>
    </>
    )
}


export default App
