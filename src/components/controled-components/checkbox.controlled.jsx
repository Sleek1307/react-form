import React, { useEffect, useState } from "react";

const CheckBox = ({ label, value, changeValue, valueInput }) => {
  const [check, setCheck] = useState({
    checked: null,
    value: valueInput,
  });

  const handleChange = (e) => {
    setCheck({
      ...check,
      checked: !check.checked,
    });
  };

  useEffect(() => {
    if (check.checked) {
      changeValue([...value, check.value]);
    } else if (!check.checked) {
      let array = value;
      for (let i = 0; i < array.length; i++) {
        if (array[i] === valueInput) {
          array.splice(i, 1);
          changeValue(array);
        }
      }
    }
  }, [check.checked]);

  return (
    <>
      <div>
        <input
          className="me-2"
          type="checkbox"
          onChange={handleChange}
          checked={check.checked}
        />
        <label className="form-label mb-0">{label}</label>
      </div>
    </>
  );
};

export default CheckBox;
