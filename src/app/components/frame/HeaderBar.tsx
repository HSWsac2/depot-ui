import { AppBar, Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Toolbar, Typography } from '@mui/material';

interface HeaderBarProps {
    role: string;
    setRole(role: string): void;
}
const HeaderBar = ({ role, setRole }: HeaderBarProps) => {

    const handleChangeFirst = (event: SelectChangeEvent) => {
        setRole(event.target.value as string);
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