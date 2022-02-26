import { AppBar, Link, Grid, Toolbar, Typography } from '@mui/material';
import "./Footer.css"
const Footer = () => {

    return (
    <footer className="footer">
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
    </footer>
    )
}

export default Footer;