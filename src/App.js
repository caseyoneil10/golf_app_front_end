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
    getRoundData()
    getUserData()
  })
}
    //CREATE NEW HOLE SCORE
    const handleCreateHoleScore = (addRound) => {
  axios.post('https://golf-app-backend.herokuapp.com/api/holescore', addRound)
  .then(response => {
    setRoundData([...userData, response.data])
  })
}

const handleDeleteRound = (deletedRound) => {
  axios.delete('https://golf-app-backend.herokuapp.com/api/scores/' +
  deletedRound.id)
  .then((response) => {
    setRoundData(roundData.filter(round => round.id !== deletedRound.id))
  })
}
const handleDeleteRoundDetail = (deletedRound) => {
  axios.delete('https://golf-app-backend.herokuapp.com/api/holescore/' +
  deletedRound.id)
  .then((response) => {
    setUserData(userData.filter(round => round.id !== deletedRound.id))
  })
}

const handleUpdateRoundTotal = (editRoundTotal) => {
  console.log(editRoundTotal);
  axios.put('https://golf-app-backend.herokuapp.com/api/scores/' + editRoundTotal.id, editRoundTotal)
  .then((response) => {
    setRoundData(roundData.map((round) => {
      return round.id !== editRoundTotal.id ? round : response.data
    }))
  })
}
const handleUpdateRoundDetail = (editRoundTotal) => {
  console.log(editRoundTotal);
  axios.put('https://golf-app-backend.herokuapp.com/api/holescore/' + editRoundTotal.id, editRoundTotal)
  .then((response) => {
    setUserData(userData.map((round) => {
      return round.id !== editRoundTotal.id ? round : response.data
    }))
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
      <CurrentRound userData={userData} handleCreate={handleCreate} handleCreateHoleScore={handleCreateHoleScore} courseData={courseData}/>
      <HomeScreen courseData={courseData}/>
      {userData.map((round) => {
        return (
          <>
      <UserData userData={userData} handleDeleteRoundDetail={handleDeleteRoundDetail} handleUpdateRoundDetail={handleUpdateRoundDetail}
      round={round}/>
        </>
      )})}
      {roundData.map((round) => {
        return(
          <>
          <RoundData roundData={roundData} handleDeleteRound={handleDeleteRound} handleUpdateRoundTotal={handleUpdateRoundTotal} round={round}/>
          </>
        )
      })}
    </>
    )
}


export default App
