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
  axios.put('https://golf-app-backend.herokuapp.com/api/scores/' + editRoundTotal.id, editRoundTotal)
  .then((response) => {
    setRoundData(roundData.map((round) => {
      return round.id !== editRoundTotal.id ? round : response.data
    }))
  })
}
const handleUpdateRoundDetail = (editRoundTotal) => {
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

    const [showAllRounds, setShowAllRounds] = useState(false)
    const [showAllRoundsButton, setShowAllRoundsButton] = useState(true)
    const [noCurrentRoundInProgress, setNoCurrentRoundInProgress] = useState(true)
    const [showAllRoundsDetail, setShowAllRoundsDetail] = useState(false)
    const [showAllRoundsButtonDetail, setShowAllRoundsButtonDetail] = useState(true)
    const [currentRoundActive, setCurrentRoundActive] = useState(false)

    const showAllUserRounds = () => {
        setShowAllRounds(!showAllRounds)
        setShowAllRoundsButton(!showAllRoundsButton)
    }
    const showAllUserRoundsDetail = () => {
        setShowAllRoundsButtonDetail(!showAllRoundsButtonDetail)
        setShowAllRoundsDetail(!showAllRoundsDetail)
    }
    const showAllUserRoundsButton = () => {
        setShowAllRoundsButton(!showAllRoundsButton)
    }
    const currentRoundInProgress = () => {
      setShowAllRounds(false)
      setShowAllRoundsButton(true)
      setNoCurrentRoundInProgress(true)
      setShowAllRoundsDetail(false)
      setShowAllRoundsButtonDetail(true)
      setCurrentRoundActive(false)
    }
    const currentRoundInProgress2 = () => {
      setShowAllRounds(false)
      setShowAllRoundsButton(false)
      setCurrentRoundActive(true)
      setNoCurrentRoundInProgress(true)
      setShowAllRoundsDetail(false)
      setShowAllRoundsButtonDetail(false)
    }


  const { score, totalScore, hole } = useSelector(state => state.scoreTotal)


  const dispatch = useDispatch()
    return (
    <>

      <CurrentRound userData={userData} showAllRoundsButton={showAllRoundsButton}
      setNoCurrentRoundInProgress={setNoCurrentRoundInProgress}
      noCurrentRoundInProgress={noCurrentRoundInProgress}
       showAllUserRounds={showAllUserRounds} handleCreate={handleCreate} handleCreateHoleScore={handleCreateHoleScore} courseData={courseData} currentRoundInProgress={currentRoundInProgress}
       currentRoundInProgress2={currentRoundInProgress2}/>

      <HomeScreen courseData={courseData}/>
      <div className="container">
      {showAllRoundsButton && !currentRoundActive  ? <button className="button" onClick={showAllUserRounds}>Show All Rounds</button> : null}

      {showAllRoundsButton || currentRoundActive ? null : <button className="button" onClick={showAllUserRounds}>Close All Rounds</button>}
      <br/>
      <br/>
      {showAllRoundsButtonDetail && !currentRoundActive ? <button className="button" onClick={showAllUserRoundsDetail}>Show All Rounds Detail</button> : null}

      {showAllRoundsButtonDetail || currentRoundActive ?  null : <button className="button" onClick={showAllUserRoundsDetail}>Close All Rounds Detail</button>}
      </div>
      {userData.map((round) => {
        return (
          <div className="container">
      {showAllRoundsDetail ? <UserData userData={userData} handleDeleteRoundDetail={handleDeleteRoundDetail} handleUpdateRoundDetail={handleUpdateRoundDetail}
      round={round}/> : null}
        </div>
      )})}
      {roundData.map((round) => {
        return(
          <>
        {showAllRounds && noCurrentRoundInProgress ?  <RoundData roundData={roundData} handleDeleteRound={handleDeleteRound} handleUpdateRoundTotal={handleUpdateRoundTotal} round={round}/> : null
      }
          </>
        )
      })}
    </>
    )
}


export default App
