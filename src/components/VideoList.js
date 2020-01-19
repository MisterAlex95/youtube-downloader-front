import React, { useContext } from "react";
import ThemeContext from "../contexts/Themes";
import GlobalContext from "../contexts/";
import Video from "./Video";

function VideoList() {
  const [, themeContext] = ThemeContext;
  const context = useContext(GlobalContext);
  const theme = useContext(themeContext);
  const searchState = context.states.search;

  if (searchState.fetching) {
    return (
      <div
        className="results"
        style={{ backgroundColor: theme.background, color: theme.fontColor }}
      >
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      </div>
    );
  }

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
