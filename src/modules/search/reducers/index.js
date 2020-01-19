import * as Constants from "../constants";

const initialState = { fetching: false, videos: [], error: null };

const reducer = (state, action) => {
  switch (action.type) {
    case Constants.IS_FETCHING:
      return { ...state, fetching: true, videos: [] };
    case Constants.FETCHED:
      return {
        ...state,
        fetching: false,
        videos: [...action.data.items]
      };
    case Constants.FETCH_ERROR:
      return { ...state, fetching: false, error: action.error };
    default:
      throw new Error();
  }
};

export { initialState, reducer };
