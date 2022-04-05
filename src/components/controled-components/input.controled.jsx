import React from "react";

const Input = ({ type, label, value, changeValue, regExp, required, error}) => {
  const handleChange = (e) => {
    changeValue({ ...value, campo: e.target.value });
  };

  const require = () => {
    if (required) {
      if (value.campo === "") {
        changeValue({ ...value, valid: false, error: "*Campo obligatorio" });
        return
      } else {
        validacion();
        return
      }
    } 
    validacion();
  };

  const validacion = () => {
    if (regExp) {
      if (regExp.test(value.campo)) {
        changeValue({ ...value, valid: true });
      } else {
        changeValue({ ...value, valid: false, error: error});
      }
    }
  };

  return (
    <div className="w-50 px-1">
      <label className="form-label">{label}</label>
      <input
        type={type}
        className="form-control"
        value={value?.campo}
        onChange={handleChange}
        onBlur={require}
        onKeyUp={require}
      />
      <p className="error-label fw-bold text-danger">
        {value?.valid === false && value?.error}
      </p>
    </div>
  );
};

export default Input;