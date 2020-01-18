import React, { useContext } from "react";
import { ThemeContext } from "../contexts/";

function Button(props) {
  const { title } = props;
  const [, context] = ThemeContext;
  const theme = useContext(context);

  return <button style={{ backgroundColor: theme.background }}>{title}</button>;
}

export default Button;
