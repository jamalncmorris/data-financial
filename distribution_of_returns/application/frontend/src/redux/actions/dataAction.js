import axios from 'axios';

// Action to fetch data from the API
export const fetchData = () => {
    return dispatch => {
        axios.get('http://localhost:8000/api/get')
            .then(response => {
                dispatch(setData(response.data));
            })
            .catch(error => {
                console.error('Error loading data:', error);
            });
    };
};

// Action to set data in the store
export const setData = data => {
    return {
        type: 'SET_DATA',
        payload: data
    };
};

// New action to handle form submission
export const submitFormData = (stockTicker, timeFrame) => {
    return dispatch => {
        axios.get(`http://localhost:8000/api/get?ticker=${stockTicker}&time_frame=${timeFrame}`)
            .then(response => {
                dispatch(setData(response.data));
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
};