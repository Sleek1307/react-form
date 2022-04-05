import React from "react";

const TextArea = ({
  cols,
  rows,
  value,
  label,
  required,
  changeValue,
  error,
}) => {
  const handleChange = (e) => {
    changeValue({
      ...value,
      campo: e.target.value,
    });
  };

  const require = () => {
    if (required) {
      if (value.campo === "") {
        changeValue({ ...value, valid: false, error: "*Campo obligatorio" });
        return;
      } else {
        validacion();
        return;
      }
    }
    
    validacion();
  };

  let validacion = () => {
    if (value.campo.length > 300) {
      changeValue({
        ...value,
        valid: false,
        error: error,
      });
    } else {
      changeValue({
        ...value,
        valid: true,
      });
    }
  };

  return (
    <>
      <div className="w-100 px-1">
        <label className="form-label">{label}</label>
        <textarea
          className="form-control w-100"
          cols={cols}
          rows={rows}
          value={value?.campo}
          onKeyUp={require}
          onBlur={require}
          onChange={handleChange}
        />
        <p className="error-label fw-bold text-danger">
          {value?.valid === false && value?.error}
        </p>
      </div>
    </>
  );
};

export default TextArea;
