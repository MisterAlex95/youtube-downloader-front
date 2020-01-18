import React from "react";
import { Input, Button } from "./";

function Tools() {
  return (
    <div className="tools">
      <span className="edition">
        <Input placeholder="Tag Title" />
        <Input placeholder="Tag Artiste" />
        <Input placeholder="Tag Album" />
      </span>
      <Button title="Download" />
    </div>
  );
}

export default Tools;
