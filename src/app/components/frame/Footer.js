import { AppBar, Link, Grid, Toolbar, Typography } from '@mui/material';
import "./Footer.css"
import * as React from 'react';

const Footer = () => {
  

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={1}>
          <Grid item xs={10}>
            <Typography component="div" sx={{ flexGrow: 1 }}>
              © HSW-Hameln
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Link href="#">Impressum</Link>
          </Grid>
          <Grid item xs={1}>
            <Link href="#">DSGVO</Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Footer;