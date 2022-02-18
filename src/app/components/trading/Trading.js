import { Card, InputBase, List } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';    

import './Trading.css';
import StockElement from "./StockElement";

export default function Trading() {
    
    const stocks = [
        {
            id: 1,
            name: "Alphabet",
            pricePerShare: 2350,
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Alphabet_Inc_Logo_2015.svg"
        },
        {
            id: 2,
            name: "Meta",
            pricePerShare: 192,
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
        },
        {
            id: 3,
            name: "Amazon.com, Inc.",
            pricePerShare: 2672,
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        },
        {
            id: 4,
            name: "Netflix",
            pricePerShare: 241,
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        }
    ]

    const [displayedStocks, setDisplayedStocks] = useState(stocks);

    function onStockSearch(value) {
        setDisplayedStocks(stocks.filter(stock => stock.name.includes(value)));
    }

    return <>
        <div className="tradingContainer">
            <div className="stockSearch">
                <Card className="searchCard">
                    <div className="search">
                        <div className='searchIconWrapper'>
                            <SearchIcon />
                        </div>
                        <InputBase
                                placeholder='Suche nach Wertpapier'
                                className='searchfield'
                                onInput={(event) => onStockSearch(event.target.value)}
                        />
                    </div>
                    <List>
                        {displayedStocks.map((stock, index) => 
                            <StockElement key={index} stock={stock} isLast={index === displayedStocks.length - 1} />
                        )}
                    </List>
                </Card>
            </div>
        </div>
    </>;
}