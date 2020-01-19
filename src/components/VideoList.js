import React, { useContext } from "react";
import ThemeContext from "../contexts/Themes";
import GlobalContext from "../contexts/";
import Video from "./Video";

function VideoList() {
  const [, themeContext] = ThemeContext;
  const context = useContext(GlobalContext);
  const theme = useContext(themeContext);
  const searchState = context.states.search;

  return (
    <div
      className="results"
      style={{ backgroundColor: theme.background, color: theme.fontColor }}
    >
      {searchState &&
        searchState.videos.length > 0 &&
        searchState.videos.map((video, index) => {
          return <Video video={video} key={index} />;
        })}
    </div>
  );
}

export default VideoList;
