import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './reducers';

export function initializeStore (initData = {}) {
	return createStore(
		rootReducer,
		initData,
		composeWithDevTools(applyMiddleware(thunkMiddleware))
	)
}
