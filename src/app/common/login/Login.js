import { Button, Card, CardActions, CardContent, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { UserContext } from "../../../context/UserContext";

import './Login.css';

export default function Login() {
    const [user, setUser] = useState({username: null, password: null});
    const [rememberUser, setRememberUser] = useState(false);

    const [, setUserCookie, removeUserCookie] = useCookies(['user']);

    function login() {
        if (rememberUser) {
            setUserCookie("user", user, {path: "/", maxAge: 600});
        } else {
            removeUserCookie();
        }
    }

    return <>
        <div className="loginContainer">
            <Card className="loginCard">
                <CardContent className="loginCardContent">
                    <Typography variant="h2" className="loginTitle">Login</Typography>
                    <div className="loginContent">
                        <Typography variant="h5" className="loginField">Benutzername</Typography>
                        <TextField 
                            variant="outlined"
                            value={user.username}
                            onChange={(event) => setUser({...user, username: event.target.value})}
                            fullWidth
                        />
                        <Typography variant="h5" className="loginField">Passwort</Typography>
                        <TextField 
                            variant="outlined"
                            value={user.password}
                            type="password"
                            onChange={(event) => setUser({...user, password: event.target.value})}
                            fullWidth
                        />
                        <FormGroup>
                            <FormControlLabel control={<Checkbox onChange={() => setRememberUser(!rememberUser)}/>} label="Angemeldet bleiben" />
                        </FormGroup>
                    </div>
                </CardContent>
                <CardActions className="loginActions">
                    <Button variant="contained" className="loginButton" onClick={() => login()}>Anmelden</Button>
                </CardActions>
            </Card>
        </div>
    </>;
}