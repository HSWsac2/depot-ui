import { AppBar, Link, Grid, Toolbar, Typography, Box } from '@mui/material';
import "./Footer.css"
import * as React from 'react';

const Footer = () => {


  return (
    <AppBar position="static">
      <Toolbar>
        <Typography component="div"
          sx={{
            flexGrow: 1
          }}>
          © HSW-Hameln
        </Typography>
        <Box sx={{
          display: 'flex',
        }}>
          <Typography sx={{ mx: 1 }}>
            <Link href="/impressum" color="inherit">Impressum</Link>
          </Typography>
          <Typography sx={{ mx: 1 }}>
            <Link href="/dsgvo" color="inherit" >DSGVO</Link>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Footer;