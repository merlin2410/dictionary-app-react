
const initialState = {
    wordDetails: null,
    loading: false,
  };
  
  const wordReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_WORD_START":
        return {
          ...state,
          loading: true,
        };
      case "FETCH_WORD_SUCCESS":
        return {
          ...state,
          wordDetails: action.payload,
          loading: false,
        };
      case "FETCH_WORD_FAILURE":
        return {
          ...state,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default wordReducer;
  