import { createTheme, ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import './App.css';
import useDepot from './app/hooks/useDepot';
import useIdleDetector from './app/hooks/useIdleDetector';
import useUser from './app/hooks/useUser';
import AppRouter from './AppRouter';
import { DepotContext } from './context/DepotContext';
import { IdleContext } from './context/IdleContext';
import { UserContext } from './context/UserContext';
import {ColorContext } from './context/ColorContext';
import * as React from 'react';
function App() {

  const [mode, setMode] = React.useState('light');

  /*  const theme = createTheme({
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
  */

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }, mode,
    }),
    [mode],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );


  const userValue = useUser();
  const depotValue = useDepot(userValue.currentUser?.client_id);

  const isIdle = useIdleDetector(120, [userValue.currentUser]);

  return (
    <StyledEngineProvider injectFirst>
        <ColorContext.Provider value={colorMode}>
          <UserContext.Provider value={userValue} >
            <DepotContext.Provider value={depotValue} >
              <IdleContext.Provider value={isIdle} >
                <ThemeProvider theme={theme}>
                  <AppRouter />
                </ThemeProvider>
              </IdleContext.Provider>
            </DepotContext.Provider >
          </UserContext.Provider >
        </ColorContext.Provider>
    </StyledEngineProvider >
  )
}

export default App;
