import axios from "axios";

import { IS_DOWNLOADING, DOWNLOADED, DOWNLOAD_ERROR } from "../constants";

export default function downloadVideo(dispatch, options = {}) {
  dispatch({ type: IS_DOWNLOADING });

  return axios({
    url: process.env.REACT_APP_URL_API_V2,
    method: 'GET',
    responseType: 'blob', // important
    headers: {
      "x-auth-token": process.env.REACT_APP_TOKEN,
      "Content-Type": "application/json"
    },
    params: {
      url: options.url,
      tagTitle: options.title,
      tagArtist: options.artist,
      tagAlbum: options.album
    }
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${options.title}.mp3`);
    document.body.appendChild(link);
    link.click();
    dispatch({ type: DOWNLOADED });
  })
    .catch(err => {
      console.log(err);
      dispatch({ type: DOWNLOAD_ERROR, error: err.message });
    });
}
