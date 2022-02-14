import BusinessIcon from '@mui/icons-material/Business';
import { Avatar, Box, ListItem, ListItemAvatar, ListItemButton, Typography } from "@mui/material";
import React from "react";

const currencyFormat = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });

const TransactionElement = ({ transaction, isLast }) => {
    return (
        <ListItem sx={{ padding: 0, borderBottom: '1px dotted #9da3a6' }}>
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar>
                        <BusinessIcon />
                    </Avatar>
                </ListItemAvatar>
                <Box sx={{ padding: '12px 32px 16px 24px', width: '100%' }}>
                    <Box sx={{ display: 'flex', width: '100%' }}>
                        <Typography variant='h6' sx={{ display: 'inline', flexGrow: 1, fontWeight: 'bold' }}>
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
    )
};

export default TransactionElement;