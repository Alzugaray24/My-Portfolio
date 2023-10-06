import React, { createContext, useState, useContext } from "react";

// Crear un contexto
const MyContext = createContext(undefined);

export function MyContextProvider({ children }) {

  // Establecer un valor inicial (por ejemplo, 'light')
  const [theme, setTheme] = useState('light');

  // Función para alternar el valor
  const toggleTheme = () => {
    setTheme((currentValue) => (currentValue === 'light' ? 'dark' : 'light'));
  };

  const MyData= {
    theme,
    toggleTheme
  };

  return (
    <MyContext.Provider value={MyData}>
        {children}
    </MyContext.Provider>
  );
}

// Función para consumir el contexto
export function useMyContext() {
  return useContext(MyContext);
}