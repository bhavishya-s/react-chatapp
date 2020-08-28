import React from "react";
import "./formInput.styles.scss";

// props : type, handleChange (function), label (text)
const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <>
      <div className="input-group">
        <input
          className="input-field"
          onChange={handleChange}
          {...otherProps}
        />

        {label ? (
          <label
            className={`${
              otherProps.value.length ? "shrink" : ""
            } form-input-label `}
          >
            {label}
          </label>
        ) : null}
      </div>
    </>
  );
};

export default FormInput;
