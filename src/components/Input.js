import React from "react";

function Input(props) {
  const { placeholder } = props;
  return <input placeholder={placeholder} />;
}

export default Input;
