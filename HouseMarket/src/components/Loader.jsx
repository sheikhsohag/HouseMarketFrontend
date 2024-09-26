import React from "react";

function Loader() {
  return (
    <div className="container d-flex">
      <div
        className="d-flex justify-content-center align-items-center w-100"
        style={{ height: "90vh" }}
      >
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
