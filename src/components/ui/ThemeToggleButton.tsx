// src/components/ui/ThemeToggleButton.tsx
import React from 'react';
// Correctly import the hook from the central context file
import { useTheme } from '../../ThemeContext';

export const ThemeToggleButton = () => {
  // This will now use the one, true context from your app!
  const { theme, toggleTheme } = useTheme();

  const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '10px 15px',
    cursor: 'pointer',
    borderRadius: '8px',
    border: '1px solid #ccc',
    zIndex: 1000,
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#333' : '#fff',
  };

  return (
    <button onClick={toggleTheme} style={buttonStyle}>
      {theme === 'light' ? 'Switch to Dark 🌙' : 'Switch to Light ☀️'}
    </button>
  );
};