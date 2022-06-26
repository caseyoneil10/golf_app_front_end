import { configureStore} from '@reduxjs/toolkit'
import scoreCounterReducer from './scoreCount'

export default configureStore({
	reducer: {
		scoreTotal: scoreCounterReducer,
	}
})
