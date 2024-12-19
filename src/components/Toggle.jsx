import React, { useState } from "react";

const Toggle = () => {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("#0f0f11");

  const generateRandomColor = () => {
    return "#" + Math.floor((Math.random() / 1.5) * 16777215).toString(16);
  };
  return (
    <div>
      {show ? <h1 style={{ color: color }}>Hello World</h1> : null}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <button onClick={() => setColor(generateRandomColor())}>
        Change Color
      </button>
    </div>
  );
};

export default Toggle;
