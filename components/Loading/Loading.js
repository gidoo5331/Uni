import React from "react";

const Loading = () => {
  return (
    <>
      <div className="ms-3">
        <strong className="me-4">Loading... </strong>
        <div
          className="spinner-border"
          style={{ width: "1.7rem", height: "1.7rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
