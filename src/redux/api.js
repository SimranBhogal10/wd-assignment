const fetchJobData = () => {
  return async (dispatch) => {
      try {
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          const body = JSON.stringify({
              "limit": 20,
              "offset": 0
          });

          const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
            method: "POST",
            headers: myHeaders,
            body
        });
          const data = await response.json();
          console.log(data);

          dispatch({ type: 'SUCCESS', payload: data });
      } catch (error) {
          console.error(error);
          dispatch({ type: 'FAILURE', payload: error.message });
      }
  };
};

export default fetchJobData;