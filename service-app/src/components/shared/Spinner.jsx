import React from "react";
import spinner from "../assets/loading.gif";
const Spinner = () => {
  // eslint-disable-next-line no-lone-blocks
  {
    return (
      <img
        src={spinner}
        alt="Loading..."
        style={{
          width: "300px",
          height: "300px",
          margin: "auto",
          display: "block",
        }}
      />
    );
  }
};

export default Spinner;
