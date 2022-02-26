import { Box, Grid } from '@mui/material';
import * as React from 'react';
import NavigationTabs from './NavigationTabs';
import HeaderBar from './HeaderBar';

const Frame = ({ children, role, setRole }) => {
    return (
        <>
            <HeaderBar role={role} setRole={setRole} />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={10}>
                        {children}
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                </Grid>
            </Box>            
        </>
    )
}

export default Frame;