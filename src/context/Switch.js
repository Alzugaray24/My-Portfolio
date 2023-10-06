import React from "react";
import { useMyContext } from "./MyContext";
import '../App.css';

function Switch() {
  // Usar el contexto para acceder al tema y la función toggleTheme
  const { theme, toggleTheme } = useMyContext();

  // Define estilos condicionales basados en el tema actual
  const containerStyles = {
    backgroundColor: theme === "light" ? "white" : "#222",
    color: theme === "light" ? "#222" : "white",
  };

  return (
    <div style={containerStyles}>
      <button className="btn btn-danger" onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Switch;