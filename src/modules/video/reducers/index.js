import * as Constants from "../constants";

const initialState = { video: null, downloading: false };

const reducer = (state, action) => {
  switch (action.type) {
    case Constants.SELECT_VIDEO:
      return { ...state, video: { ...action.video } };
    case Constants.IS_DOWNLOADING:
      return { ...state, downloading: true, error: null };
    case Constants.DOWNLOADED:
      return { ...state, downloading: false, error: null };
    case Constants.DOWNLOAD_ERROR:
      return { ...state, downloading: false, error: action.error };
    default:
      throw new Error();
  }
};

export { initialState, reducer };
