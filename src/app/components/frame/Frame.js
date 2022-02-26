import { Grid } from '@mui/material';
import * as React from 'react';
import Footer from './Footer';
import './Frame.css';
import HeaderBar from './HeaderBar';

const Frame = ({ children }) => {
    return (
        <div className="wrapper">
            <HeaderBar />
            <Grid container spacing={2} sx={{flexGrow: 1}}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={10}>
                    {children}
                </Grid>
                <Grid item xs={1}>
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}

export default Frame;