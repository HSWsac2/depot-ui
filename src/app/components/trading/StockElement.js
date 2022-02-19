import React from "react";
import { Avatar, Box, Divider, ListItem, ListItemAvatar, ListItemButton, Typography, useMediaQuery } from "@mui/material";
import { maxHeight } from "@mui/system";

import './StockElement.css';

const currencyFormat = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });

export default function StockElement({stock, isLast, onClick}) {
    return <>
        <ListItem sx={{padding: 0}} className="stockElement" onClick={onClick}>
            <ListItemAvatar sx={{width: 150, display: 'flex'}}>
                    <svg style={{maxWidth: '90px', maxHeight: '50px', marginLeft: 'auto', marginRight: 'auto'}}>
                        <image href={stock.logoUrl} style={{width: '90px', transform: 'translateY(25%'}}></image>
                    </svg>
            </ListItemAvatar>
            <Box sx={{
                padding: '12px 32px 16px 12px',
                width: '100%'
            }}>
                <Box sx={{ display: 'flex', width: '100%' }}>
                    <Typography variant='h6' sx={{ display: 'inline', width: '20vw', fontWeight: 'bold', marginRight: '12px' }}>
                        {stock.name}
                    </Typography>
                    <Typography variant='subtitle1' align='right' sx={{ display: 'inline-flex', flexGrow: 1, justifyContent: 'flex-start', marginTop: '3px'}}>
                        {stock.isin}
                    </Typography>
                    <Typography align='right' sx={{ display: 'inline', fontWeight: 'bold', width: '5vw' }}>
                        {currencyFormat.format(stock.pricePerShare)}
                    </Typography>
                </Box>
            </Box>
        </ListItem>
        {!isLast && <Divider />}
    </>;
}