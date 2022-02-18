import { Box, Grid } from '@mui/material';
import * as React from 'react';
import NavigationTabs from './NavigationTabs';
import HeaderBar from './HeaderBar';
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: "#d1c4e9",
      },
    },
  });

const Frame = ({ children, role, setRole }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
            <HeaderBar role={role} setRole={setRole} />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={10}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <NavigationTabs />
                        </Box>

                        {children}

                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                </Grid>
            </Box>
            </ThemeProvider>
        </>
    )
}

export default Frame;