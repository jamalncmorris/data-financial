import axios from 'axios';

// Action to fetch data from the API
export const fetchData = (stockTicker = '', timeFrame = '1D') => {
    return dispatch => {
        axios.get(`http://localhost:8000/api/get?ticker=${stockTicker}&time_frame=${timeFrame}`)
            .then(response => {
                dispatch(setData({ data: response.data, timeFrame: timeFrame }));
            })
            .catch(error => {
                console.error('Error:', error);
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
                // Include timeFrame in the payload
                dispatch(setData({ data: response.data, timeFrame: timeFrame }));
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
};
