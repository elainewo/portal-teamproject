import React from "react";
import "./gameItem.css";

const GamesItem = (props) => {
  return (
    <div className="button">
      <button onClick={props.click}>Read Later</button>
    </div>
  );
};

export default GamesItem;
