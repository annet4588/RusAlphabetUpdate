import React from "react";

function Letters(props) {
  return (
    <button type="button" className="letter">
      {props.name}
    </button>
  );
}
export default Letters;
