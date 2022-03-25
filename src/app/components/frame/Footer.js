import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
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
          <Typography sx={{ mx: 1 }} color="inherit" component={Link} to="/impressum">
            Impressum
          </Typography>
          <Typography sx={{ mx: 1 }} color="inherit" component={Link} to="/dsgvo">
            DSGVO
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Footer;