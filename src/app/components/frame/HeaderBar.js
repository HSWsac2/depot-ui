import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';
import { useRef } from 'react';

const title = "Depot"
const HeaderBar = () => {
    const pages = [
        {
            label: 'Depotübersicht',
            target: '/overview',
        },
        {
            label: 'Depotverwaltung',
            target: '/management',
        },
        {
            label: 'Kundendaten',
            target: '/data',
        },
        {
            label: 'Handel',
            target: '/trade',
        },
        {
            label: 'Transaktionen',
            target: '/transactions',
        },
    ];

    const navAnchor = useRef(null);
    const [navOpen, setNavOpen] = useState(false);

    const handleOpenNavMenu = (event) => {
        setNavOpen(true);
    };

    const handleCloseNavMenu = () => {
        setNavOpen(false);
    };

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        {title}
                    </Typography>

                    {/* Icon Menu on small devices */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            ref={navAnchor}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={navAnchor.current}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={navOpen}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.label}
                                    component={Link}
                                    to={page.target}
                                    onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* Title on small devices */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        {title}
                    </Typography>
                    {/* Buttons on big devices */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.label}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                component={Link}
                                to={page.target}
                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>

                    <HeaderMenu />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default HeaderBar;