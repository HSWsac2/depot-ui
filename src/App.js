import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import './App.css';
import AppRouter from './AppRouter';
import { UserContext } from './context/UserContext';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#002884',
        light: '#757ce8',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  const [userCookie] = useCookies(['user']);
  const [currentUser, setCurrentUser] = useState(userCookie.user ?? null)

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }} >
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </UserContext.Provider>
  )
}

export default App;
