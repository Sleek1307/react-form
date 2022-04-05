import React from "react";

const layout = (props) => {
  return (
    <>
      <div className="w-100" style={{ height: "100vh" }}>
        {props.page}
      </div>
    </>
  );
};

export default layout;
