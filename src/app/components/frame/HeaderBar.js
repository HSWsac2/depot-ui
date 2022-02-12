import { AppBar, Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Toolbar, Typography } from '@mui/material';

const HeaderBar = ({ role, setRole }) => {

    const handleChangeFirst = (event) => {
        setRole(event.target.value);
    };

    return (<AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Depot-Übersicht
            </Typography>
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
        </Toolbar>
    </AppBar>
    )
}

export default HeaderBar;