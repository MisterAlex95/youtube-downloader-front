import * as Constants from "../constants";

const initialState = { video: null };

const reducer = (state, action) => {
  switch (action.type) {
    case Constants.SELECT_VIDEO:
      return { ...state, video: { ...action.video } };
    default:
      throw new Error();
  }
};

export { initialState, reducer };
