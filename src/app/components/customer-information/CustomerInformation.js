import { AssignmentInd } from "@mui/icons-material";
import { Card, TextField, Typography } from "@mui/material";
import React from "react";
import './CustomerInformation.css';

export default function CustomerInformation({customer}) {

    return <>
        <div className="customerContainer">
            <Typography variant="h2">Kundendaten</Typography>
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
                        />  
                        <TextField 
                            variant="outlined" 
                            label="E-Mail"
                            value={customer.email}
                            className="dataField"
                            fullWidth
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
                        />
                    </div>
                </Card>
            </div>
        </div>
    </>;
}