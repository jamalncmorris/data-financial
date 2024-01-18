const initialState = {
    data: [],
    timeFrame: '1D' // Default time frame
};

function dataReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                data: action.payload.data,
                timeFrame: action.payload.timeFrame // Update time frame when data is set
            };
        // Other actions can be added here
        default:
            return state;
    }
}

export default dataReducer;
