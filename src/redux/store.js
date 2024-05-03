import {configureStore} from '@reduxjs/toolkit'

const initialState = {
    data: null,
    error: null,
    isLoading: false
};

const reducer = (state = initialState, action) => {
  console.log(action.type)
    switch (action.type) {
        case 'SUCCESS':
            return { ...state, data: action.payload, isLoading: false };
        case 'FAILURE':
            return { ...state, error: action.payload, isLoading: false };
        default:
            return state;
    }
};


const store = configureStore({
  reducer: reducer,
});

export default store;