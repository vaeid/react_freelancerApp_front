import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();
export function DatKModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
    }
    return () => {};
  }, [isDarkMode]);
  return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
}
export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) throw new Error('use DarkMode context outside');
  return context;
}
