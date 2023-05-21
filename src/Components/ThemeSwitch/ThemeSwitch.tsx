import React from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ThemeSwitch = () => {
  const [theme, setTheme] = React.useState<any>(
    localStorage.getItem("theme") || "light"
  );

  const toggleColorMode = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  React.useEffect(() => {
    const body = document.querySelector("body");
    body?.setAttribute("data-theme", theme);
  }, [theme || localStorage.getItem("theme")]);

  return (
    <IconButton onClick={toggleColorMode} color="inherit">
      {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeSwitch;
