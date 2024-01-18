const initialState = {
    data: []
};

function dataReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                data: action.payload
            };
        // Other actions can be added here
        default:
            return state;
    }
}

export default dataReducer;
