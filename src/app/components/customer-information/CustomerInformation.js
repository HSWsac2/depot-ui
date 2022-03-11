import { AssignmentInd } from "@mui/icons-material";
import { Alert, Button, Card, Snackbar, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import InputMask from 'react-input-mask';
import { UserContext } from "../../../context/UserContext";
import useAxios from "../../hooks/useAxios";
import useUser from "../../hooks/useUser";
import './CustomerInformation.css';

export default function CustomerInformation({customer, setCustomer}) {

    const userValue = useUser();

    // TODO use userInformation    
    console.log("userInformation", userValue?.currentUser);
    let user = userValue?.currentUser;
    
    return <>
        {user &&
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
                                value={`${user.firstname} ${user.lastname}`}
                                className="dataField"
                                fullWidth
                            />
                            {/* <TextField 
                                variant="outlined" 
                                label="Mobilnummer"
                                value={userValue.}
                                className="dataField"
                                fullWidth
                                disabled
                            />   */}
                            <TextField 
                                variant="outlined" 
                                label="E-Mail"
                                value={user.e_mail}
                                className="dataField"
                                fullWidth
                                disabled
                            />
                        </div>
                    </Card>
                    {/* <Card className="customerDataCard">
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
                    </Card> */}
                    <Card className="customerDataCard">
                        <Typography variant="h5" className="cardTitle">Persönliche Daten</Typography>
                        <div className="cardContent">
                            <TextField 
                                variant="outlined" 
                                label="Anschrift"
                                value={`${user.street} ${user.house_number}`}
                                className="dataField"
                                fullWidth
                                disabled
                            /> 
                            <TextField 
                                variant="outlined" 
                                label="Wohnort"
                                value={`${user.plz} ${user.city}`}
                                className="dataField"
                                fullWidth
                                disabled
                            /> 
                            <TextField 
                                variant="outlined" 
                                label="Geburtsdatum"
                                value={user.birthdate}
                                className="dataField"
                                fullWidth
                                disabled
                            />  
                            <TextField 
                                variant="outlined" 
                                label="Staatsangehörigkeit"
                                value={user.nationality}
                                className="dataField"
                                fullWidth
                                disabled
                            />
                        </div>
                    </Card>
                </div>
            </div>
        }
    </>;
}