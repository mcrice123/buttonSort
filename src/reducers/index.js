import { combineReducers } from 'redux';
import AddOneReducer from './reducer_add_one';

const rootReducer = combineReducers({
  buttons: AddOneReducer
});

export default rootReducer;
