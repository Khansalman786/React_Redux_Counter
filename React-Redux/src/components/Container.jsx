import React from "react";

const Container = ({ children }) => {
  return (
    <div>
      <div className="card m-auto " style={{ width: "50%" }}>
        <center className="card-body">{children}</center>
      </div>
    </div>
  );
};

export default Container;
