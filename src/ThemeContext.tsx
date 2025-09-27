// src/ThemeContext.js
import React, { ReactNode, createContext, useState, useEffect, useContext } from 'react';

// Define the context type
type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(
    // 1. Check localStorage first
    localStorage.getItem('theme') ||
    // 2. Check user's OS preference
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  useEffect(() => {
    // Save theme to localStorage and update the body class whenever it changes
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useTheme = () => useContext(ThemeContext);