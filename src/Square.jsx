import React from "react";
import rake from "./pics/Rambo.png";
import azeke from "./pics/aza.png";
function Square({ clickedArray, handleClick }) {
  return (
    <div className="board">
      {clickedArray.map((item, index) => {
        if (item === "") {
          return (
            <div
              className="square"
              key={index}
              onClick={() => handleClick(index)}
            >
              {item}
              {/* <img class="fit-picture" src={rake} alt="wtf" /> */}
            </div>
          );
        } else {
          if (item === "X") {
            return (
              <div
                className="square clicked"
                key={index}
              >
                <img className="fit-picture" src={rake} />
              </div>
            );
          } else {
            return (
              <div
                className="square clicked"
                key={index}
              >
                <img className="fit-picture" src={azeke} />
              </div>
            );
          }
        }
      })}
    </div>
  );
}

export default Square;
