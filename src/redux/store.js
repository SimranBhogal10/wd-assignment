import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialState = {
  data: null,
  error: null,
  isLoading: false
};


// Create a slice using createSlice function
const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    fetchDataRequest(state) {
      state.isLoading = true;
    },
    fetchDataSuccess(state, action) {
      state.data = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    fetchDataFailure(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    appendData(state, action) {
      state.data.payload.jdList = state.data.payload.jdList.concat(action.payload);
    }
  }
});


export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure, appendData } = jobSlice.actions;
export const selectJobData = (state) => state.job.data;


const store = configureStore({
  reducer: jobSlice.reducer
});


export default store;