import React from "react";

function Base(props) {
  return (
    <div className="card" style={{ marginTop: "20px" }}>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Base;
