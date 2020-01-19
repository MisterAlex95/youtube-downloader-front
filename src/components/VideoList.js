import React, { useContext, useReducer } from "react";
import ThemeContext from "../contexts/Themes";
import GlobalContext from "../contexts/";

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
      {searchState && searchState.videos.length === 0 && "Empty"}
      {searchState &&
        searchState.videos.length > 0 &&
        searchState.videos.map((video, index) => {
          return (
            <img
              key={index}
              alt="test"
              src={video.snippet.thumbnails.default.url}
            />
          );
        })}
    </div>
  );
}

export default VideoList;
