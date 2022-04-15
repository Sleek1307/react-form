import React from "react";

const Radio = ({ name, value, changeValue, labelRadio}) => {
  return (
    <>
      <div className="w-100 px-1 d-flex align-items-center">
        <input
          type="radio"
          name={name}
          id={name}
          value={value}
          onChange={changeValue}
        />
        <label 
          htmlFor={name} 
          className="form-label ms-2 my-0"
        >{labelRadio}</label>
      </div>
    </>
  );
};

export default Radio;
