import { AppBar, Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';

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
            <Button variant="contained" color="secondary">Anmelden</Button>
            </Box>
        </Toolbar>
    </AppBar>
    )
}

export default HeaderBar;