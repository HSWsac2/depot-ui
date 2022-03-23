import { AlternateEmail } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import {
	Alert,
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Snackbar,
	TextField,
	Typography,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { ReactComponent as Avatar } from "./avatar.svg";
import "./Login.css";
import qs from "qs";
import WaitingScreen from "../WaitingScreen";
import sha256 from "crypto-js/sha256";
import { getErrorMessage } from "../enums/ErrorMessages";
import { DepotContext } from "../../../context/DepotContext";

export default function Login() {
	const location = useLocation();
	const history = useHistory();

	const { clientId, redirect, positionId, positionSubId } = qs.parse(location.search, {
		ignoreQueryPrefix: true,
	});

	const [loginInformation, setLoginInformation] = useState({
		email: null,
		password: null,
	});
	const [rememberUser, setRememberUser] = useState(false);
	const [loginFailed, setLoginFailed] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");
	const [isError, setIsError] = useState(false);

	const { login } = useContext(UserContext);
	const { selectDepotById } = useContext(DepotContext);

	function loginWithUser(user) {
		login({ ...user }, rememberUser);
		history.replace(redirect ?? "");
	}

	function loginFromUrl(clientId, positionId, positionSubId) {
		axios
			.get(
				process.env.REACT_APP_BACKEND_URL_DEPOT_SERVICE +
					`clients/${clientId}`
			)
			.then((response) => response.data)
			.then(user => {
				login({ ...user }, rememberUser);
				if (positionId && positionSubId) {
					selectDepotById(positionId, parseInt(positionSubId))
				}
				history.replace(redirect ?? "");
			})
			.catch((error) => {
				setErrorMsg(getErrorMessage(error));
				setIsError(true);
				history.replace("/login");
			});
	}

	function handleLogin(event) {
		event.preventDefault();
		if (loginInformation.email && loginInformation.password) {
			if (
				sha256(loginInformation.password).toString() ==
				"43a7e1b922352c1cb80e9c6936c9f2a8549236f7e42fe52933ba5d0a31850066"
			) {
				axios
					.get(
						process.env.REACT_APP_BACKEND_URL_DEPOT_SERVICE +
							`clients/bymail/${loginInformation.email}`
					)
					.then((response) => response.data)
					.then((user) => {
						if (user !== undefined) {
							setLoginFailed(false);
							loginWithUser(user);
						} else {
							setLoginFailed(true);
						}
					})
					.catch((error) => {
						setErrorMsg(getErrorMessage(error));
						setIsError(true);
					});
			} else {
				setLoginFailed(true);
			}
		} else {
			setErrorMsg("Es wurden nicht alle Login-Felder gefüllt!");
			setIsError(true);
		}
	}

	useEffect(() => {
		if (clientId) {
			loginFromUrl(clientId, positionId, positionSubId);
		}
	}, [clientId]);

	if (clientId) {
		return (
			<div
				style={{
					minHeight: "100vh",
					boxSizing: "border-box",
					display: "flex",
				}}
			>
				<WaitingScreen message="Sie werden in Kürze weitergeleitet" />
			</div>
		);
	}

	return (
		<>
			<Box className="loginContainer">
				<Box bgcolor="primary.main" className="accent">
					<img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
					<Typography color="white" variant="h2">
						Mein Depot
					</Typography>
				</Box>
				<Box className="loginContent">
					<form onSubmit={(e) => handleLogin(e)}>
						<Avatar className="avatar" />
						<Typography variant="h3" className="loginTitle">
							Login
						</Typography>

						<Box className="first loginField">
							<AlternateEmail
								sx={{ color: "action.active", mr: 1, my: 0.5 }}
							/>
							<TextField
								variant="standard"
								label="E-Mail"
								value={loginInformation.email ?? ""}
								onChange={(event) =>
									setLoginInformation({
										...loginInformation,
										email: event.target.value,
									})
								}
								fullWidth
							/>
						</Box>

						<Box className="loginField">
							<LockIcon
								sx={{ color: "action.active", mr: 1, my: 0.5 }}
							/>
							<TextField
								variant="standard"
								label="Passwort"
								value={loginInformation.password ?? ""}
								type="password"
								onChange={(event) =>
									setLoginInformation({
										...loginInformation,
										password: event.target.value,
									})
								}
								fullWidth
							/>
						</Box>

						<FormControlLabel
							label="Angemeldet bleiben"
							sx={{ mb: "8px" }}
							control={
								<Checkbox
									onChange={() =>
										setRememberUser(!rememberUser)
									}
								/>
							}
						/>

						<Button fullWidth type="submit" variant="contained">
							Anmelden
						</Button>
					</form>
				</Box>
			</Box>
			<Snackbar
				open={loginFailed}
				autoHideDuration={2000}
				onClose={() => setLoginFailed(false)}
			>
				<Alert severity="error">
					Login Fehlgeschlagen: E-Mail oder Passwort inkorrekt!
				</Alert>
			</Snackbar>
			<Snackbar
				open={isError}
				autoHideDuration={2000}
				onClose={() => setIsError(false)}
			>
				<Alert severity="error">{errorMsg}</Alert>
			</Snackbar>
		</>
	);
}
