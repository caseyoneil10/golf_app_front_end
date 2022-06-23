import { configureStore} from '@reduxjs/toolkit'
import counterReducer from './scoreCount'


export default configureStore({
	reducer: {
		scoreTotal: counterReducer
	}
})
