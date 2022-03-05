import { AppBar, Link, Grid, Toolbar, Typography } from '@mui/material';
import "./Footer.css"
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Footer = () => {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
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

  return (
    
    <ThemeProvider theme={theme}>
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={1}>
          <Grid item xs={10}>
            <Typography component="div" sx={{ flexGrow: 1 }}>
              © HSW-Hameln
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Link href="#">Impressum</Link>
          </Grid>
          <Grid item xs={1}>
            <Link href="#">DSGVO</Link>
          </Grid>
          <Grid>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  )
}

export default Footer;