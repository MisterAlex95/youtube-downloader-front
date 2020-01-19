import axios from "axios";

import { IS_DOWNLOADING, DOWNLOADED, DOWNLOAD_ERROR } from "../constants";

export default function downloadVideo(dispatch, options = {}) {
  dispatch({ type: IS_DOWNLOADING });

  return axios
    .post(process.env.REACT_APP_URL_API, {
      url: options.url,
      tagTitle: options.tagTitle,
      tagArtist: options.tagArtist,
      tagAlbum: options.tagAlbum
    })
    .then(() => {
      dispatch({ type: DOWNLOADED });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DOWNLOAD_ERROR, error: err.message });
    });
}
