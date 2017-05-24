import { combineReducers } from 'redux';
import ButtonsReducer from './reducer_buttons';

const rootReducer = combineReducers({
  buttons: ButtonsReducer
});

export default rootReducer;
