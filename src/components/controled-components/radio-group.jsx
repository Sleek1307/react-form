import React from "react";

const RadioGroup = ({ children, labelGroup, value, setValue}) => {


  return (
    <>
      <div>
        <label className="form-label"> 
          {labelGroup}
        </label>
        {children}
        <p className="error-label fw-bold text-danger">
        {value?.error}
      </p>
      </div>
    </>
  );
};

export default RadioGroup;
