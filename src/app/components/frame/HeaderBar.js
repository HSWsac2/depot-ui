import { AppBar, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import HeaderMenu from './HeaderMenu';
const HeaderBar = () => {


    return (<AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Depot-Übersicht
            </Typography>
            <HeaderMenu/>
        </Toolbar>
    </AppBar>
    )
}

export default HeaderBar;