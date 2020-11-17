import React, { useContext, useState } from "react";
import { Input, Button } from "./";
import GlobalContext from "../contexts/";
import { addVideoToPlex, downloadVideo } from "../modules/video/actions/";

function Tools() {
  const [title, setTitle] = useState();
  const [artist, setArtist] = useState();
  const [album, setAlbum] = useState();

  const context = useContext(GlobalContext);
  const videoState = context.states.video;
  const videoDispatch = context.dispatchs.video;

  const postVideo = () => {
    if (videoState.video && title && artist) {
      addVideoToPlex(videoDispatch, {
        title,
        artist,
        album,
        url: "https://www.youtube.com/watch?v=" + videoState.video.id.videoId
      });
    }
  };

  const getVideo = () => {
    if (videoState.video && title && artist) {
      downloadVideo(videoDispatch, {
        title,
        artist,
        album,
        url: "https://www.youtube.com/watch?v=" + videoState.video.id.videoId
      });
    }
  };

  return (
    <div className="tools">
      <span className="edition">
        <Input
          placeholder="Tag Title"
          onChange={e => setTitle(e.target.value)}
        />
        <Input
          placeholder="Tag Artiste"
          onChange={e => setArtist(e.target.value)}
        />
        <Input
          placeholder="Tag Album"
          onChange={e => setAlbum(e.target.value)}
        />
      </span>
      <span className="button">
        <Button title="Download" onClick={getVideo} />
      <Button title="Add To Plex" onClick={postVideo} />
      </span>
    </div>
  );
}

export default Tools;
