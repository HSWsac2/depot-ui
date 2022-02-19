import { Alert, Button, Dialog, DialogContentText, DialogTitle, Snackbar, TextField } from "@mui/material";
import { purple } from "@mui/material/colors";
import React, { useState } from "react";
import InputMask from 'react-input-mask';

import './BuySellDialog.css';

export default function BuySellDialog({stock, isOpen, handleClose}) {

    const [amount, setAmount] = useState(undefined);
    const [errorOpen, setErrorOpen] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);
    const [method, setMethod] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    function closeDialog() {
        setAmount(undefined);
        handleClose();
    }

    function buyStock() {
        setMethod("buy");
            //TODO service call buy
        if (amount) {
            setSuccessOpen(true);
            stock.amount = stock.amount + parseInt(amount);
        }
    }

    function sellStock() {
        setMethod("sell");
        if (amount) {
            if (stock.amount >= parseInt(amount)) {
                //TODO service call sell
                setSuccessOpen(true);
                stock.amount = stock.amount - parseInt(amount);
            } else {
                setErrorMsg("Nicht genügend Wertpapiere vorhanden");
                setErrorOpen(true);
            }
        }
    }

    function closeToasts() {
        setSuccessOpen(false);
        setErrorOpen(false);
    }

    return <>
    {stock &&
    <>
        <Dialog open={isOpen} onClose={() => closeDialog()} PaperProps={{sx: {height: '20vw', width: '20vw'}}}>
            <DialogTitle className="tradingTitle">{`${stock.name} handeln`}</DialogTitle>
            <svg style={{maxWidth: '90px', maxHeight: '50px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px'}}>
                        <image href={stock.logoUrl} style={{width: '90px', transform: 'translateY(25%'}}></image>
            </svg>
            <DialogContentText className="tradingContent">{`Aktueller Preis: ${stock.pricePerShare}€`}</DialogContentText>
            <DialogContentText className="tradingContent">{`Anzahl im Besitz: ${stock.amount}`}</DialogContentText>
            <div className="amount">
                <DialogContentText className="tradingContent amountLabel">Anzahl zu handeln: </DialogContentText>
                <InputMask 
                    mask="999999"
                    maskChar={null}
                    value={amount} 
                    onChange={(event) => setAmount(event.target.value)}
                    style={{display: 'inline'}}
                >
                    { () =>
                        <TextField variant="outlined" label="Anzahl" className="amountField"></TextField>
                    }
                </InputMask>
            </div>
            <div className="tradingActions">
                <Button variant="contained" className="tradingButton" onClick={() => buyStock()}>Kaufen</Button>
                <Button variant="contained" className="tradingButton" onClick={() => sellStock()}>Verkaufen</Button>
            </div>
        </Dialog>
        <Snackbar open={errorOpen} autoHideDuration={4000} onClose={() => closeToasts()}>
            <Alert onClose={() => closeToasts()} severity="error">{`Konnte Wertpapier ${stock.name} nicht ${method == "buy" ? "kaufen" : "verkaufen"}. Fehler: ${errorMsg}.`}</Alert>
        </Snackbar>
        <Snackbar open={successOpen} autoHideDuration={2000} onClose={() => closeToasts()}>
            <Alert onClose={() => closeToasts()} severity="success">{`Wertpapier ${stock.name} erfolgreich ${method == "buy" ? "gekauft" : "verkauft"}.`}</Alert>
        </Snackbar>
    </>
    }
    </>;
}