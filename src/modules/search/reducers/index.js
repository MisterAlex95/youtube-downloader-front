import * as Constants from "../constants";

function reducer(state, action) {
  switch (action.type) {
    case Constants.IS_FETCHING:
      return { ...state, fetching: true };
    case Constants.FETCHED:
      return { ...state, fetching: false };
    case Constants.FETCH_ERROR:
      return { ...state, fetching: false };
    default:
      throw new Error();
  }
}

export default reducer;
