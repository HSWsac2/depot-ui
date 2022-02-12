import { AssignmentInd } from "@mui/icons-material";
import { Alert, Button, Card, Snackbar, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import InputMask from 'react-input-mask';
import './CustomerInformation.css';

export default function CustomerInformation({customer, setCustomer}) {
    const [hasChanged, setHasChanged] = useState(false);
    const [openSaveSuccess, setOpenSaveSuccess] = useState(false);

    function changedPhone(number) {
        number = number.replace("(", "");
        number = number.replace(")", "");
        number = number.replace(" ", "");
        setCustomer({...customer, phone: number});
        setHasChanged(true);
    }

    function changedEmail(email) {
        setCustomer({...customer, email: email});
        setHasChanged(true);
    }

    function changedAddress(address) {
        setCustomer({...customer, address: address});
        setHasChanged(true);
    }

    function changedNationality(nationality) {
        setCustomer({...customer, nationality: nationality});
        setHasChanged(true);
    }

    function saveCustomerData() {
        setHasChanged(false);
        setOpenSaveSuccess(true);
        console.log(customer);
    }

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
                        <InputMask 
                            mask="(+99) 999 99999999"
                            value={customer.phone}
                            onChange={(event) => changedPhone(event.target.value)}
                        >
                            {() =>
                                <TextField 
                                    variant="outlined" 
                                    label="Mobilnummer"
                                    value={customer.phone}
                                    className="dataField"
                                    fullWidth
                                />  
                            }
                        </InputMask>
                        <TextField 
                            variant="outlined" 
                            label="E-Mail"
                            value={customer.email}
                            className="dataField"
                            fullWidth
                            onChange={(event) => changedEmail(event.target.value)}
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
                            onChange={(event) => changedAddress(event.target.value)}
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
                            onChange={(event) => changedNationality(event.target.value)}
                        />
                    </div>
                </Card>
            </div>
            {
                hasChanged &&
                <Button variant="contained" className="saveButton" onClick={() => saveCustomerData()}>Speichern</Button>
            }
            <Snackbar open={openSaveSuccess} autoHideDuration={2000} onClose={() => setOpenSaveSuccess(false)}>
                <Alert severity="success">Kundendaten wurden gespeichert!</Alert>     
            </Snackbar> 
        </div>
    </>;
}