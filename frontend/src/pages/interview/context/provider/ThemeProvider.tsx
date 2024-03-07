import React, { useState, ReactNode, useMemo } from 'react';
import { ThemeContext } from '../ThemeContext'; // Adjust the import path as needed

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);
  return (
    <ThemeContext.Provider value={ value }>
      {children}
    </ThemeContext.Provider>
  );
};