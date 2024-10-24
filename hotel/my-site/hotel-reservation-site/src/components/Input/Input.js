import React from "react";
import "../../styles/main.scss";

const Input = (props) => {
  return (
    <div>
      <input
        className="input"
        type={props.type}
        disabled={props.disabled}
        value={props.value}
        placeholder={props.placeholder}
        onBlur={ props.handleInputBlur}
        onChange={props.handleInputChange}
        name={props.name}
      />
    </div>
  );
};

export default Input;
