import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';
import NavigationMenu from './NavigationMenu';

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

    return (
        <AppBar position="sticky">
            <Container maxWidth="100%">
                <Toolbar>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        {title}
                    </Typography>

                    {/* Icon Menu on small devices */}
                    <NavigationMenu pages={pages}/>
                    {/* Title on small devices */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        {title}
                    </Typography>
                    {/* Buttons on big devices */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, pl: {md: '0', lg: '2rem'} }}>
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