import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';


const NavigationMenu = ({ pages }) => {

    const navAnchor = useRef(null);
    const [navOpen, setNavOpen] = useState(false);

    const handleOpenNavMenu = (event) => {
        setNavOpen(true);
    };

    const handleCloseNavMenu = () => {
        setNavOpen(false);
    };
    
    return (
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
    )
}

export default NavigationMenu;