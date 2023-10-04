
import axios from "axios";


export const fetchWordStart = () => {
  return {
    type: "FETCH_WORD_START",
  };
};

export const fetchWordSuccess = (data) => {
  return {
    type: "FETCH_WORD_SUCCESS",
    payload: data,
  };
};

export const fetchWordFailure = () => {
  return {
    type: "FETCH_WORD_FAILURE",
  };
};

export const fetchWordDetails = (word) => {
  return (dispatch) => {
    dispatch(fetchWordStart());

    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        dispatch(fetchWordSuccess(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        dispatch(fetchWordFailure());
        console.log("failed")
      });
  };
};
