
import axios from "axios";
import store from "../store"

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
    store.dispatch(fetchWordStart());

    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        store.dispatch(fetchWordSuccess(response.data));
      })
      .catch((error) => {
        store.dispatch(fetchWordFailure());
      });
  };
};
