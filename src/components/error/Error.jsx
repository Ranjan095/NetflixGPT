import React from "react";

const Error = ({ error }) => {
  return (
    <div>
      <h1 className="font-bold text-2xl">
        Somting went wrong! {error?.message}
      </h1>
    </div>
  );
};

export default Error;
