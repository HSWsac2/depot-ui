import { AppBar, Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import Divider from '@mui/material/Divider';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
const HeaderBar = ({ role, setRole }) => {

    const handleChange = (event) => {
        setSetting(event.target.value);
    };
    const [setting, setSetting] = React.useState('1');

    return (<AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Depot-Übersicht
            </Typography>
            <Box sx={{ minWidth: 100 }}>
                <FormControl fullWidth>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={setting}
                        onChange={handleChange}
                        autoWidth
                        defaultValue={setting}
                    >
                        <MenuItem value={"1"} sx={{ minWidth: 100 }}><RocketLaunchIcon/>Depot1</MenuItem>
                        <MenuItem value={"2"} sx={{ minWidth: 100 }}><RocketLaunchIcon />Depot2</MenuItem>
                        <Divider sx={{ my: 0.5 }} />
                        <li>
                            <Typography
                                sx={{ mt: 0.5, ml: 9 }}
                                color="text.secondary"
                                display="block"
                                variant="caption"
                                >
                             Sonstiges
                            </Typography>
                        </li>
                        <MenuItem value={"data"} sx={{ minWidth: 100 }}><AccountBalanceIcon />Kundendaten</MenuItem>
                        <MenuItem value={"logOut"} sx={{ minWidth: 100 }}><PowerSettingsNewIcon />Ausloggen</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Toolbar>
    </AppBar>
    )
}

export default HeaderBar;