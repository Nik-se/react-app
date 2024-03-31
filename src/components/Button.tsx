import React from "react";

const Button = () => {
  return (
    <>
      <div className="row justify-content-end">
        <div className="col-auto">
          <br />
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "100px", marginRight: "10px" }}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "100px" }}
          >
            Next
          </button>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          style={{ width: "100px", marginTop: "20px" }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Button;
