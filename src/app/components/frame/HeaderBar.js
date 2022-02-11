import { AppBar, Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Toolbar, Typography } from '@mui/material';

const HeaderBar = ({ role, setRole }) => {

    const handleChangeFirst = (event) => {
        setRole(event.target.value);
    };

    return (<AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Depot-Uebersicht
            </Typography>
            <Box sx={{ minWidth: 100 }}>
                <FormControl fullWidth>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={role}
                        onChange={handleChangeFirst}
                        autoWidth
                        defaultValue={role}
                    >
                        <MenuItem value={"customer"} sx={{ minWidth: 100 }}>Kunde</MenuItem>
                        <MenuItem value={"banker"} sx={{ minWidth: 100 }}>Banker</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Toolbar>
    </AppBar>
    )
}

export default HeaderBar;