import { SELECT_VIDEO } from "../constants";

export default function selectVideo(dispatch, options = {}) {
  dispatch({ type: SELECT_VIDEO, video: options.video });
}
