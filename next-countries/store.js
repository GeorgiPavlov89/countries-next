import { createContext } from 'react'


export const lightTheme = {
    background: 'hsl(0, 0%, 88%)',
    text: 'hsl(200, 15%, 8%)',
    element: 'hsl(0, 0%, 100%)',
    input: 'hsl(0, 0%, 52%);'
  };
  
  export const darkTheme = {
    background: 'hsl(207, 26%, 17%)',
    text: 'hsl(0, 0%, 100%)',
    element: 'hsl(209, 23%, 22%)',
  };
  
  export const CountriesContext = createContext({});