import React, { useState, useReducer } from "react";
import Button from "./Button";
import { reducer } from "../modules/search/reducers/";
import { fetchVideos } from "../modules/search/actions/";

function Searchbar() {
  const [search, setSearch] = useState("");
  const [_, dispatch] = useReducer(reducer);

  const launchFetchRequest = () => {
    if (search) {
      fetchVideos(dispatch, { query: search });
    }
  };

  return (
    <div className="searchbar">
      <input
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <Button title="Search" onClick={launchFetchRequest} />
    </div>
  );
}

export default Searchbar;
