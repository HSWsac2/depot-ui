import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import "./Footer.css";

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