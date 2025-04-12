import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((state) => state.counter);

  return (
    <div>
      <p className="lead mb-4">Counter Curr Value : {counterVal}</p>
    </div>
  );
};

export default DisplayCounter;
