import React from "react";

function formValidation() {
  return (
    <div
      style={{
        marginLeft: "200px",
      }}
    >
      <pre>
        <h2>Checking Password Strength in ReactJS</h2>
        <span>Enter Password: </span>
        <input
          type="text"
          onChange={(e) => validate(e.target.value)}
        ></input>{" "}
        <br />
        <span
          style={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          {errorMessage}
        </span>
      </pre>
    </div>
  );
}

export default formValidation;
