import React, { useContext } from "react";
import { ThemeContext } from "../contexts/";

function Input(props) {
  const { placeholder } = props;
  const [, context] = ThemeContext;

  const theme = useContext(context);

  return (
    <input
      style={{ backgroundColor: theme.background, color: theme.fontColor }}
      placeholder={placeholder}
    />
  );
}

export default Input;
