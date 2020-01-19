import React, { useState, useContext } from "react";
import Button from "./Button";
import { fetchVideos } from "../modules/search/actions/";
import GlobalContext from "../contexts/";

function Searchbar() {
  const [search, setSearch] = useState("");
  const context = useContext(GlobalContext);

  const launchFetchRequest = () => {
    if (search) {
      fetchVideos(context.dispatchs.search, { query: search });
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
