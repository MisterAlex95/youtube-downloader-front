import React, { useContext } from "react";
import GlobalContext from "../contexts/";

function Viewer() {
  const context = useContext(GlobalContext);
  const videoState = context.states.video;
  const videoUrl = "https://www.youtube.com/embed/";

  return (
    <div className="viewer">
      {videoState.video && (
        <iframe
          title="video"
          width="100%"
          height="350"
          src={videoUrl + videoState.video.id.videoId}
        ></iframe>
      )}
    </div>
  );
}

export default Viewer;
