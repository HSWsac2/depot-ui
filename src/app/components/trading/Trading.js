import { Alert, Card, InputBase, List, Snackbar } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import SearchIcon from '@mui/icons-material/Search';  
import axios from 'axios';  

import './Trading.css';
import StockElement from "./StockElement";
import BuySellDialog from "./BuySellDialog";
import useUser from "../../hooks/useUser";
import useDepot from "../../hooks/useDepot";
import { DepotContext } from "../../../context/DepotContext";

export default function Trading() {
    const [tradingDialogOpen, setTradingDialogOpen] = useState(false);
    const [selectedStock, setSelectedStock] = useState(undefined)

    const [allStocks, setAllStocks] = useState([])

    const [displayedStocks, setDisplayedStocks] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
    const [isError, setIsError] = useState(false);

    const { currentDepot } = useContext(DepotContext);

    useEffect(() => {
        const fetchStocks = async () => {
            axios.get(process.env.REACT_APP_BACKEND_URL_TRANSACTION_SERVICE+"stocks/current").then(res => {
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
        if (currentDepot) {
            setSelectedStock(stock);
            setTradingDialogOpen(true);
        } else {
            setIsError(true);
            setErrorMsg("Bitte zuerst ein Depot auswählen!");
        }
    }

    function closeDialog() {
        setSelectedStock(undefined);
        setTradingDialogOpen(false);
    }

    return <>
        {allStocks && displayedStocks &&
        <>
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
                <BuySellDialog isOpen={tradingDialogOpen} handleClose={() => closeDialog()} stock={selectedStock}></BuySellDialog>
            </div>
            <Snackbar open={isError} autoHideDuration={2000} onClose={() => setIsError(false)}>
                <Alert severity="error">{errorMsg}</Alert>
            </Snackbar>
        </>
        }
    </>;
}