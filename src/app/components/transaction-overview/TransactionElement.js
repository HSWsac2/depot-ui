import BusinessIcon from '@mui/icons-material/Business';
import { Avatar, Box, Divider, ListItem, ListItemAvatar, ListItemButton, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";

const currencyFormat = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });

const TransactionElement = ({ transaction, isLast }) => {

    // hide the icon on small devices
    const bigDevice = useMediaQuery('(min-width:600px)');

    const [open, setOpen] = useState(false);

    return (
        <>
            <ListItem sx={{ padding: 0 }}>
                <ListItemButton onClick={() => setOpen(true)}>
                    {bigDevice && (
                        <ListItemAvatar sx={{marginRight: '12px'}}>
                            <Avatar>
                                <BusinessIcon />
                            </Avatar>
                        </ListItemAvatar>)}
                    <Box sx={{
                        padding: '12px 32px 16px 12px',
                        width: '100%'
                    }}>
                        <Box sx={{ display: 'flex', width: '100%' }}>
                            <Typography variant='h6' sx={{ display: 'inline', flexGrow: 1, fontWeight: 'bold', marginRight: '12px' }}>
                                {transaction.name}
                            </Typography>
                            <Typography align='right' sx={{ display: 'inline', fontWeight: 'bold' }}>
                                {currencyFormat.format(transaction.totalPrice)}
                            </Typography>
                        </Box>

                        <Typography variant='subtitle1'>
                            {transaction.date}
                        </Typography>
                        <Typography variant='body1'>
                            Anzahl: {transaction.count}
                        </Typography>
                        <Typography variant='body1'>
                            Preis pro Stück: {currencyFormat.format(transaction.pricePerShare)}
                        </Typography>
                    </Box>
                </ListItemButton>
            </ListItem>
            {!isLast && <Divider />}
        </>
    )
};

export default TransactionElement;