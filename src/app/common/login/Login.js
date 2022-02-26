import { AlternateEmail } from "@mui/icons-material";
import LockIcon from '@mui/icons-material/Lock';
import { Alert, Box, Button, Checkbox, FormControlLabel, Snackbar, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { UserContext } from "../../../context/UserContext";
import { ReactComponent as Avatar } from './avatar.svg';
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
            removeUserCookie("user");
        }
    }

    function login(event) {
        event.preventDefault();
        axios.get('http://localhost:8080/api/depotService/clients/')
            .then(response => response.data)
            .then(users => users.find(user => user.e_mail === loginInformation.email))
            .then(user => {
                if (user !== undefined) {
                    setLoginFailed(false);
                    setUser({ ...user })
                } else {
                    setLoginFailed(true);
                }
            })
            .catch(console.log)

    }

    return <>
        <Box className='loginContainer'>
            <Box bgcolor='primary.main' className="accent">
                <img src="/logo.png" alt="logo" />
                <Typography color='white' variant='h2'>
                    Mein Depot
                </Typography>
            </Box>
            <Box className="loginContent">
                <form onSubmit={e => login(e)}>
                    <Avatar className='avatar' />
                    <Typography variant="h3" className="loginTitle">
                        Login
                    </Typography>

                    <Box className="first loginField">
                        <AlternateEmail sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            variant="standard"
                            label="E-Mail"
                            value={loginInformation.email ?? ""}
                            onChange={(event) => setLoginInformation({ ...loginInformation, email: event.target.value })}
                            fullWidth
                        />
                    </Box>

                    <Box className="loginField">
                        <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            variant="standard"
                            label="Passwort"
                            value={loginInformation.password ?? ""}
                            type="password"
                            onChange={(event) => setLoginInformation({ ...loginInformation, password: event.target.value })}
                            fullWidth
                        />
                    </Box>

                    <FormControlLabel
                        label="Angemeldet bleiben"
                        sx={{ mb: '8px' }}
                        control={
                            <Checkbox onChange={() => setRememberUser(!rememberUser)} />
                        }
                    />

                    <Button fullWidth type="submit" variant="contained">
                        Anmelden
                    </Button>

                </form>

            </Box>
        </Box>
        <Snackbar open={loginFailed} autoHideDuration={2000} onClose={() => setLoginFailed(false)}>
            <Alert severity="error">Login Fehlgeschlagen: E-Mail existiert nicht!</Alert>
        </Snackbar>
    </>;
}