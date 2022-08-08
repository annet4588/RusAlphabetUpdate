import React from "react";

function Letters(props) {
  
  function handleClick() {
    console.log(handleClick);
  }

    return (
    <button type="button" className="letter" onClick={handleClick}>
      {props.name}
    </button>
  );
}
export default Letters;
