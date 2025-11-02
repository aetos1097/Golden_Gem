import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Efecto para cargar el tema inicial después de montar
  useEffect(() => {
    const savedTheme = localStorage.getItem('goldenGemTheme');
    console.log('Loaded theme from localStorage:', savedTheme);
    if (savedTheme) {
      setTheme(savedTheme);
    }
    setMounted(true);
  }, []);

  // Aplicar clase al documento cuando cambie el tema
  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Guardar tema en localStorage
    localStorage.setItem('goldenGemTheme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      console.log('Toggling theme from', prevTheme, 'to', newTheme);
      return newTheme;
    });
  };

  const value = {
    theme,
    toggleTheme
  };

  // Evitar flash de contenido sin estilo
  if (!mounted) {
    return <ThemeContext.Provider value={value}><div>{children}</div></ThemeContext.Provider>;
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

