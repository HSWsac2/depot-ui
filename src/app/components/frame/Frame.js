import { Box, Grid } from '@mui/material';
import * as React from 'react';
import HeaderBar from './HeaderBar';

const Frame = ({ children }) => {
    return (
        <>
            <HeaderBar />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
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