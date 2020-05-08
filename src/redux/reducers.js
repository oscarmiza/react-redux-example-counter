import { combineReducers } from 'redux'
import counter1 from './reducerCounter1'
import counter2 from './reducerCounter2'

export default combineReducers({
  counter1,
  counter2
})