import React, { useContext } from "react";
import ThemeContext from "../contexts/Themes";

function Button(props) {
  const { title, onClick } = props;
  const [, context] = ThemeContext;
  const theme = useContext(context);

  return (
    <button
      style={{ backgroundColor: theme.background, color: theme.fontColor }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
