import React, { useContext, useReducer } from "react";
import { reducer, initialState } from "../modules/search/reducers/";
import { ThemeContext } from "../contexts/";

function VideoList() {
  const [, context] = ThemeContext;
  const [state] = useReducer(reducer, initialState);

  const theme = useContext(context);

  console.log(state);

  return (
    <div
      className="results"
      style={{ backgroundColor: theme.background, color: theme.fontColor }}
    >
      {state && state.videos.length === 0 && "Empty"}
      {state &&
        state.videos.length > 0 &&
        state.videos.map(video => {
          return <img alt="test" src={video.snippet.thumbnails.default.url} />;
        })}
    </div>
  );
}

export default VideoList;
