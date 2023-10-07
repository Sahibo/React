import './App.css';
import React, { useState, useContext, createContext } from 'react';
import { useEffect } from 'react';

export const ThemeContext1 = createContext(null);
export const ThemeContext2 = createContext(null);

export default function App() {
  const [theme, setTheme] = useState("light");
  

  useEffect(() => {
    const storedTheme = localStorage.getItem('themeData')
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])
  
  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem('themeData', newTheme);
  };

  

  return (
    <div>
      <ThemeContext1.Provider value={theme}>
        <MyWindow1>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 20px'}}>
            <h1>First Window</h1>
            <button onClick={changeTheme} style={{height: '40px'}}>Change Theme</button>
          </div>
        </MyWindow1>
      </ThemeContext1.Provider>

      <ThemeContext2.Provider value={theme}>
        <MyWindow2>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 20px'}}>
            <h1>Second Window</h1>
            <button onClick={changeTheme} style={{height: '40px'}}>Change Theme</button>
          </div>
        </MyWindow2>
      </ThemeContext2.Provider>
    </div>
  );
}


function MyWindow1({ children }) {
  const theme = useContext(ThemeContext1);
  const className = `${theme}-theme`;
  return (
    <div className={className}>
      {children}
    </div>
  );
}

function MyWindow2({ children }) {
  const theme = useContext(ThemeContext2);
  const className = `${theme}-theme`;
  return (
    <div className={className}>
      {children}
    </div>
  );
}