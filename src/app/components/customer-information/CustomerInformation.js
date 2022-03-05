import { AssignmentInd } from "@mui/icons-material";
import { Alert, Button, Card, Snackbar, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import InputMask from 'react-input-mask';
import { UserContext } from "../../../context/UserContext";
import useAxios from "../../hooks/useAxios";
import useUser from "../../hooks/useUser";
import './CustomerInformation.css';

export default function CustomerInformation({customer, setCustomer}) {
    
    // const {currentUser} = useContext(UserContext);

    // const userInformation = useAxios({
    //     url: `http://localhost:8080/api/depotService/clients/${currentUser?.clientId}`,
    //     method: 'get',
    //     baseUrl: '',
    //     active: currentUser != null,
    // })

    const userValue = useUser();

    // TODO use userInformation    
    console.log("userInformation", userValue?.currentUser);
    
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
                    <Typography variant="h5" className="cardTitle">Kontodaten</Typography>
                    <div className="cardContent">
                        <TextField 
                            variant="outlined" 
                            label="Verrechnungskonto"
                            value={customer.account}
                            className="dataField"
                            fullWidth
                            disabled
                        /> 
                        <TextField 
                            variant="outlined" 
                            label="Kaufkraft"
                            value={customer.buyingpower}
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