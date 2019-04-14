import { combineReducers } from 'redux';
import wordReducer from './word';

export const rootReducer = combineReducers({
	wordState: wordReducer
});
