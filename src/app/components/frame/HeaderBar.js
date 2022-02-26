import { AppBar, Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Toolbar, Typography } from '@mui/material';
import NavigationTabs from './NavigationTabs';
import Grid from '@mui/material/Grid';

const HeaderBar = ({ role, setRole }) => {

    const handleChangeFirst = (event) => {
        setRole(event.target.value);
    };

    return (<AppBar position="static">
        <Toolbar>
            <Grid container spacing={1}>
                <Grid item xs={10}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Depot-Übersicht
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Box sx={{ minWidth: 100 }}>
                        <FormControl fullWidth>
                            <Select
                                labelId="select-label"
                                id="select"
                                value={role}
                                onChange={handleChangeFirst}
                                autoWidth
                                defaultValue={role}
                            >
                                <MenuItem value={"customer"} sx={{ minWidth: 100 }}>Kunde</MenuItem>
                                <MenuItem value={"staff"} sx={{ minWidth: 100 }}>Mitarbeiter</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
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