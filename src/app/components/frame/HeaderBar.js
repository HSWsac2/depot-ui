import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar } from '@mui/material';
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
            target: '/depot-ui/overview',
            icon: <AccountBalanceWalletIcon />,
        },
        {
            label: 'Depotverwaltung',
            target: '/depot-ui/management',
            icon: <SettingsIcon />,
        },
        {
            label: 'Handel',
            target: '/depot-ui/trade',
            icon: <CurrencyExchangeIcon />,
        },
        {
            label: 'Transaktionen',
            target: '/depot-ui/transactions',
            icon: <ReceiptLongIcon />,
        },
    ];

    return (
        <AppBar position="sticky">
            <Container maxWidth="100%">
                <Toolbar>
                    <Avatar alt="Logo" src="/logo.png" sx={{ display: { xs: 'none', md: 'flex' } }} />

                    {/* Icon Menu on small devices */}
                    <NavigationMenu pages={pages} />
                    {/* Title on small devices */}
                    <Box sx={{ flexDirection: 'row', alignItems: 'center', flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <Avatar alt="Logo" src="/logo.png" />
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{ ml: 1 }}
                        >
                            {title}
                        </Typography>
                    </Box>

                    {/* Buttons on big devices */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, pl: { md: '.5rem', lg: '2rem' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.label}
                                sx={{ my: 2, mr: '10px', color: 'white', display: 'block' }}
                                component={Link}
                                to={page.target}
                            >
                                <Typography sx={{ textTransform: 'none' }}>
                                    {page.label}
                                </Typography>
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