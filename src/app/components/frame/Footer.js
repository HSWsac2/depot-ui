import { AppBar, Grid, Toolbar, Typography, Box } from '@mui/material';
import "./Footer.css"
import * as React from 'react';
import { Link } from 'react-router-dom';

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
          <Typography sx={{ mx: 1 }} component={Link} to="/impressum" >
            Impressum
          </Typography>
          {/* <Typography sx={{ mx: 1 }}>
            <Link to="/dsgvo">DSGVO</Link>
          </Typography> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Footer;