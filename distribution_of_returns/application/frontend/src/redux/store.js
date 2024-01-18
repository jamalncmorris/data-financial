import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducers/dataReducer';
import { fetchData } from './actions/dataAction';

const store = configureStore({
    reducer: {
        data: dataReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(/* other middleware if any */),
});

store.dispatch(fetchData());

export default store;
