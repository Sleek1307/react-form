import React from "react";

const CheckGroup = ({ labelGroup, children }) => {
  return (
    <>
      <div>
        <label className="form-label">{labelGroup}</label>
        {children}
      </div>
    </>
  );
};

export default CheckGroup;