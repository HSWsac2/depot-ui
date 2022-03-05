import { Card, InputBase, List } from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';  
import axios from 'axios';  

import './Trading.css';
import StockElement from "./StockElement";
import BuySellDialog from "./BuySellDialog";
import useUser from "../../hooks/useUser";
import useDepot from "../../hooks/useDepot";

export default function Trading() {
    const [tradingDialogOpen, setTradingDialogOpen] = useState(false);
    const [selectedStock, setSelectedStock] = useState(undefined)

    const [allStocks, setAllStocks] = useState([])

    const [displayedStocks, setDisplayedStocks] = useState([]);

    useEffect(() => {
        const fetchStocks = async () => {
            axios.get("http://localhost:8081/stocks/current").then(res => {
                setAllStocks(res.data);
                setDisplayedStocks(res.data);
            })
        }
        fetchStocks();
    }, []);
    
    function onStockSearch(value) {
        setDisplayedStocks(allStocks.filter(stock => stock.name.toLowerCase().includes(value.toLowerCase()) || stock.isin.toLowerCase().includes(value.toLowerCase())));
    }

    function onSelectStock(stock) {
        setSelectedStock(stock);
        setTradingDialogOpen(true);
    }

    return <>
        {allStocks && displayedStocks &&
            <div className="tradingContainer">
                <div className="stockSearch">
                    <Card className="searchCard" sx={{marginBottom: '5vh'}}>
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
                        <List sx={{paddingBottom: 0}}>
                            {displayedStocks.map((stock, index) => 
                                <StockElement key={index} stock={stock} isLast={index === displayedStocks.length - 1} onClick={() => onSelectStock(stock)}/>
                            )}
                        </List>
                    </Card>
                </div>
                <BuySellDialog isOpen={tradingDialogOpen} handleClose={() => setTradingDialogOpen(false)} stock={selectedStock}></BuySellDialog>
            </div>
        }
    </>;
}