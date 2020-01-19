import axios from "axios";

import { IS_DOWNLOADING, DOWNLOADED, DOWNLOAD_ERROR } from "../constants";

export default function downloadVideos(dispatch, options = {}) {
  dispatch({ type: IS_DOWNLOADING });

  console.log(options);
  return dispatch({ type: DOWNLOADED });

  // return axios("TON_API", {
  //   url: options.url,
  //   tagTitle: options.tagTitle,
  //   tagArtist: options.tagArtist,
  //   tagAlbum: options.tagAlbum
  // })
  //   .then(() => {
  //     dispatch({ type: DOWNLOADED });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     dispatch({ type: DOWNLOAD_ERROR, error: err.message });
  //   });
}
