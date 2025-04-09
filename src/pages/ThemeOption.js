import React from "react";

function ThemeOption({ theme }) {
  const setTheme = () => {
    document.documentElement.setAttribute("data-theme", theme); // Apply to <html>
  };

  return (
    <div
      onClick={setTheme}
      className="theme-option"
      id={`theme-${theme}`}
    ></div>
  );
}

export default ThemeOption;
