import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './store.js';
import { appendData } from './store.js'; // Import the appendData action creator


const fetchJobData = (limit, offset) => {
  return async (dispatch) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({
        "limit": limit,
        "offset": offset
      });


      const reqOp = {
        method: "POST",
        headers: myHeaders,
        body
      }


      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", reqOp);
      const data = await response.json();
      console.log(data);


      if (offset === 0) {
        dispatch(fetchDataSuccess({ type: 'SUCCESS', payload: data }));
      } else {
        dispatch(appendData(data.jdList));
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: 'FAILURE', payload: error.message });
    }
  };
};


export default fetchJobData;
