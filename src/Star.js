import React, { useState } from "react";

function Star() {
  const [index, setIndex] = useState(-1);
  const changeColor = (index) => {
    setIndex(index);
  };
  return (
    <div>
      {[...Array(5)].map((element, ind) => (
        <i
          key={ind}
          className="fas fa-star"
          style={{
            color: `${ind <= index ? "#FDCC0D" : "grey"}`,
            fontSize: "2rem",
            margin: "7px",
            cursor: "pointer",
          }}
          onClick={() => changeColor(ind)}
        ></i>
      ))}
    </div>
  );
}

export default Star;
