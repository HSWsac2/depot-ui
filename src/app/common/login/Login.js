import { Alert, Button, Card, CardActions, CardContent, Checkbox, FormControlLabel, FormGroup, Snackbar, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { UserContext } from "../../../context/UserContext";

import './Login.css';

export default function Login() {
    const [loginInformation, setLoginInformation] = useState({ email: null, password: null });
    const [rememberUser, setRememberUser] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);

    const [, setUserCookie, removeUserCookie] = useCookies(['user']);
    const { setCurrentUser } = useContext(UserContext);

    function setUser(user) {
        setCurrentUser(user)
        if (rememberUser) {
            setUserCookie("user", user, { path: "/", maxAge: 600 });
        } else {
            removeUserCookie();
        }
    }

    function login() {
        axios.get('http://localhost:8080/api/depotService/clients/')
            .then(response => response.data)
            .then(users => users.find(user => user.e_mail === loginInformation.email))
            .then(user => {
                if (user !== undefined) {
                    setLoginFailed(false);
                    setUser({ clientId: user.client_id })
                } else {
                    setLoginFailed(true);
                }
            })
            .catch(console.log)

    }

    return <>
        <div className="loginContainer">
            <Card className="loginCard">
                <CardContent className="loginCardContent">
                    <Typography variant="h2" className="loginTitle">Login</Typography>
                    <div className="loginContent">
                        <Typography variant="h5" className="loginField">E-Mail</Typography>
                        <TextField
                            variant="outlined"
                            value={loginInformation.email}
                            onChange={(event) => setLoginInformation({ ...loginInformation, email: event.target.value })}
                            fullWidth
                        />
                        <Typography variant="h5" className="loginField">Passwort</Typography>
                        <TextField
                            variant="outlined"
                            value={loginInformation.password}
                            type="password"
                            onChange={(event) => setLoginInformation({ ...loginInformation, password: event.target.value })}
                            fullWidth
                        />
                        <FormGroup>
                            <FormControlLabel control={<Checkbox onChange={() => setRememberUser(!rememberUser)} />} label="Angemeldet bleiben" />
                        </FormGroup>
                    </div>
                </CardContent>
                <CardActions className="loginActions">
                    <Button variant="contained" className="loginButton" onClick={() => login()}>Anmelden</Button>
                </CardActions>
            </Card>
        </div>
        <Snackbar open={loginFailed} autoHideDuration={2000} onClose={() => setLoginFailed(false)}>
            <Alert severity="error">Login Fehlgeschlagen: E-Mail existiert nicht!</Alert>
        </Snackbar>
    </>;
}