import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <p className="lead mb-4">Counter Curr Value : {counter}</p>
    </div>
  );
};

export default DisplayCounter;
