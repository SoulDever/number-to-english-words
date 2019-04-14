import axios from 'axios'

const API_BASE = '/api';

/**
 * Create an Axios Clients with defaults
 */
// Default config options
const defaultOptions = {
    baseURL: `${API_BASE}`
};

// Create instance
const Client = axios.create(defaultOptions);

/**
 * Request Wrapper with default success/error actions
 */
const request = function(options) {

    const onSuccess = function(response) {
        //console.debug('Request Successful!', response);
        return response.data;
    };

    const onError = function(error) {
        console.error('Request Failed:', error.config);

        if (error.response) {
            // Request was made but server responded with something
            // other than 2xx
            console.error('Status:',  error.response.status);
            console.error('Data:',    error.response.data);
            console.error('Headers:', error.response.headers);

        } else {
            // Something else happened while setting up the request
            // triggered the error
            console.error('Error Message:', error.message);
        }

        return Promise.reject(error.response || error.message);
    };

    return Client(options).then(onSuccess).catch(onError);
};

export default request;
