import React, { useContext } from "react";
import { selectVideo } from "../modules/video/actions/";
import GlobalContext from "../contexts/";

function Video(props) {
  const { video } = props;
  const context = useContext(GlobalContext);
  const videoDispatch = context.dispatchs.video;

  const selectVideoContainer = () => {
    selectVideo(videoDispatch, { video });
  };

  return (
    <div className="video-thumbnail" onClick={selectVideoContainer}>
      <img alt="test" src={video.snippet.thumbnails.default.url} />
      <p>{video.snippet.title}</p>
    </div>
  );
}

export default Video;
