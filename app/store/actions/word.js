import * as actionTypes from './actionTypes';
import numberToEnglishWordsService from '../../services/api/numberToEnglishWords';

// FETCHING WORDS
export const fetchWordsStart = () => {
    return {
        type: actionTypes.FETCH_WORDS_START,
    }
};

export const fetchWordsSuccess = (words) => {
    return {
        type: actionTypes.FETCH_WORDS_SUCCESS,
        words
    }
};

export const fetchWordsFail = (error) => {
    return {
        type: actionTypes.FETCH_WORDS_FAIL,
        error,
    }
};

export const fetchWords = (number) => {

	return (dispatch) => {
		dispatch(fetchWordsStart());

		return numberToEnglishWordsService
			.get(number)
			.then((response) => {
				const { data, statusCode  } = response;

				if(statusCode === 200)
					dispatch(fetchWordsSuccess(data));
				else
					dispatch(fetchWordsFail(data));
			})
			.catch((errors) => {
				const { error, statusCode  } = errors;

				dispatch(fetchWordsFail(error));
			});
	}
};
