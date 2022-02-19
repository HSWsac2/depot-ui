import { AssignmentInd } from "@mui/icons-material";
import { Alert, Button, Card, Snackbar, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import InputMask from 'react-input-mask';
import './CustomerInformation.css';

export default function CustomerInformation({customer, setCustomer}) {

    return <>
        <div className="customerContainer">
            <div className="customerIcon">
                <AssignmentInd sx={{fontSize: 200}}/>
            </div>
            <div className="customerData">
                <Card className="customerDataCard">
                    <Typography variant="h5" className="cardTitle">Kontaktdaten</Typography>
                    <div className="cardContent">
                        <TextField 
                            variant="outlined" 
                            label="Name" 
                            disabled
                            value={customer.name}
                            className="dataField"
                            fullWidth
                        />
                        <TextField 
                            variant="outlined" 
                            label="Mobilnummer"
                            value={customer.phone}
                            className="dataField"
                            fullWidth
                            disabled
                        />  
                        <TextField 
                            variant="outlined" 
                            label="E-Mail"
                            value={customer.email}
                            className="dataField"
                            fullWidth
                            disabled
                        />
                    </div>
                </Card>
                <Card className="customerDataCard">
                    <Typography variant="h5" className="cardTitle">Persönliche Daten</Typography>
                    <div className="cardContent">
                        <TextField 
                            variant="outlined" 
                            label="Anschrift"
                            value={customer.address}
                            className="dataField"
                            fullWidth
                            disabled
                        /> 
                        <TextField 
                            variant="outlined" 
                            label="Geburtsdatum"
                            value={customer.birthday}
                            className="dataField"
                            fullWidth
                            disabled
                        />  
                        <TextField 
                            variant="outlined" 
                            label="Staatsangehörigkeit"
                            value={customer.nationality}
                            className="dataField"
                            fullWidth
                            disabled
                        />
                    </div>
                </Card>
            </div>
        </div>
    </>;
}