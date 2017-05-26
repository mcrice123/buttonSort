import { combineReducers } from 'redux';
import ButtonsReducer from './reducer_buttons';
import addOneReducer from './reducer_add_one';

const rootReducer = combineReducers({
  buttons: addOneReducer
});

export default rootReducer;
