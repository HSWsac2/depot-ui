import { Box, Divider, ListItem, ListItemAvatar, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import './StockElement.css';


const currencyFormat = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });

export default function StockElement({ stock, isLast, onClick }) {

    // media queries to guarantee that important elements are displayed on small devices
    const showIcon = useMediaQuery("(min-width:900px)");
    const showIsin = useMediaQuery("(min-width:700px)");
    const bigFont = useMediaQuery("(min-width:500px)");

    return <>
        <ListItem sx={{ padding: 0 }} className="stockElement" onClick={onClick}>
            <ListItemAvatar sx={{ width: 150, display: showIcon? 'flex': 'none' }}>
                <svg style={{ maxWidth: '90px', maxHeight: '50px', marginLeft: 'auto', marginRight: 'auto' }}>
                    <image href={stock.link} style={{ width: '90px', transform: 'translateY(25%' }}></image>
                </svg>
            </ListItemAvatar>
            <Box sx={{
                padding: '12px 32px 16px 12px',
                width: '100%'
            }}>
                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                    <Typography variant='h6' sx={{ display: 'inline', width: '10rem', minWidth: bigFont ? '20rem' : '10rem', fontWeight: 'bold', marginRight: '12px', fontSize: bigFont ? '1.25rem' : '1rem'}}>
                        {stock.name}
                    </Typography>
                    <Typography variant='subtitle1' align='right' sx={{ display: showIsin? 'inline-flex' : 'none', flexGrow: 1, justifyContent: 'flex-start', marginTop: '3px' }}>
                        {stock.isin}
                    </Typography>
                    <Typography align='right' sx={{ display: 'inline', fontWeight: 'bold', minWidth: '4rem' }}>
                        {currencyFormat.format(stock.price_per_stock)}
                    </Typography>
                </Box>
            </Box>
        </ListItem>
        {!isLast && <Divider />}
    </>;
}