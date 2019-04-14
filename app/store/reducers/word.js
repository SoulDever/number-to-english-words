import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../../shared/utilities/helpers";

const initialState = {
  words: null,
  isFetching: false,
  didInvalidate: false,
  error: null,
};

const fetchWordsStart = (state) => {
    return updateObject(state, { words: null, isFetching: true, error: null, didInvalidate: false });
};

const fetchWordsSuccess = (state, action) => {
    return updateObject(state, { words: action.words, isFetching: false });
};

const fetchWordsFail = (state, action) => {
    return updateObject(state, { error: action.error, isFetching: false, didInvalidate: true });
};

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.FETCH_WORDS_START: return fetchWordsStart(state, action);
        case actionTypes.FETCH_WORDS_SUCCESS: return fetchWordsSuccess(state, action);
        case actionTypes.FETCH_WORDS_FAIL: return fetchWordsFail(state, action);

        default:
            return state;
    }
};

export default reducer;
