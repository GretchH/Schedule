import { combineReducers } from 'redux';
import courses from './coursesReducer'

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;