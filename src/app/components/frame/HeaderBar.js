import { AppBar, Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Toolbar, Typography } from '@mui/material';
import NavigationTabs from './NavigationTabs';
import Grid from '@mui/material/Grid';
import HeaderMenu from './HeaderMenu';

const HeaderBar=() => {
    return (
    <AppBar position="static">
        <Toolbar>
            <Grid container spacing={1}>
                <Grid item xs={10}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Depot-Übersicht
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <HeaderMenu />
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <NavigationTabs />
                    </Box>
                </Grid>
            </Grid>
        </Toolbar>

    </AppBar>
    )
}

export default HeaderBar;