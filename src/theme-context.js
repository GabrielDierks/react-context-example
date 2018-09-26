import React from 'react';

export const themes = {
    dark: {
        foreground: '#222',
        background: '#04a5d0',
        text: '#222',
    },
    light: {
        foreground: '#04a5d0',
        background: '#222',
        text: '#fff',
    },
};

export const ThemeContext = React.createContext(
    themes.dark // default value
);