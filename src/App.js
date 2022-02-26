import { createTheme, ThemeProvider } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import './App.css';
import AppRouter from './AppRouter';
import { DepotContext } from './context/DepotContext';
import { UserContext } from './context/UserContext';
import { StyledEngineProvider } from '@mui/material/styles';

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
  const [depotCookie] = useCookies(['depot'])
  const { positionId, positionSubId } = depotCookie;

  const [currentUser, setCurrentUser] = useState(userCookie.user ?? null)
  const [currentDepot, setCurrentDepot] = useState(null)

  // get initial deposit based on cookie values
  useEffect(() => {
    if (positionId == null || positionSubId == null || currentUser == null) return;
    axios.get(`http://localhost:8080/api/depotService/deposits/${positionId}/${positionSubId}`)
      .then(response => response.data)
      .then(response => setCurrentDepot(response))
      .catch(console.error)
  }, [positionId, positionSubId, currentUser]);

  return (
    <StyledEngineProvider injectFirst>
      <UserContext.Provider value={{ currentUser, setCurrentUser }} >
        <DepotContext.Provider value={{ currentDepot, setCurrentDepot }} >
          <ThemeProvider theme={theme}>
            <AppRouter />
          </ThemeProvider>
        </DepotContext.Provider >
      </UserContext.Provider >
    </StyledEngineProvider>
  )
}

export default App;
