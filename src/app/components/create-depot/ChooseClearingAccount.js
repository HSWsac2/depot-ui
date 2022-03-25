import { Alert, Card, Radio, Snackbar } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { getErrorMessage } from "../../common/enums/ErrorMessages";
import WaitingScreen from "../../common/WaitingScreen";

function ChooseClearingAccount({ selectedAccount, setSelectedAccount }) {
	const { currentUser } = useContext(UserContext);
	const [accounts, setAccounts] = useState([]);
	const [errorMsg, setErrorMsg] = useState("");
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const currencyFormat = new Intl.NumberFormat("de-DE", {
		style: "currency",
		currency: "EUR",
	});

	useEffect(() => {
		const fetchAccounts = () => {
			setIsLoading(true);
			axios
				.get(
					`${process.env.REACT_APP_BACKEND_URL_KONTEN_SERVICE}accounts/${currentUser.client_id}/clearingaccounts`
				)
				.then((res) => {
					setAccounts(res.data.data);
				})
				.catch((error) => {
					setErrorMsg(getErrorMessage(error));
					setIsError(true);
				})
				.finally(() => {
					setIsLoading(false);
				});
		};
		fetchAccounts();
	}, []);

	return (
		<>
			{!isLoading && (
				<>
					<div style={{ marginBottom: "30px" }}>
						Verfügbare Verrechnungskonten:
					</div>
					{accounts.map((account) => (
						<div
							style={{ display: "flex", marginBottom: "40px" }}
							key={account.iban}
						>
							<Radio
								checked={selectedAccount === account}
								onChange={() => setSelectedAccount(account)}
								value={account}
								sx={{
									display: "inline",
									height: "40px",
									marginTop: "auto",
									marginBottom: "auto",
									marginRight: "10px",
								}}
							></Radio>
							<Card
								sx={{ display: "inline", cursor: "pointer" }}
								onClick={() => setSelectedAccount(account)}
							>
								<h4
									style={{
										marginLeft: "20px",
										marginRight: "20px",
									}}
								>
									{account.name}
								</h4>
								<p
									style={{
										marginLeft: "20px",
										marginRight: "20px",
									}}
								>{`IBAN: ${account.iban}`}</p>
								<p
									style={{
										marginLeft: "20px",
										marginRight: "20px",
									}}
								>{`Kontostand: ${currencyFormat.format(
									account.balance / 100
								)}`}</p>
							</Card>
						</div>
					))}
					<Snackbar
						open={isError}
						autoHideDuration={2000}
						onClose={() => setIsError(false)}
					>
						<Alert severity="error">{errorMsg}</Alert>
					</Snackbar>
				</>
			)}
			{isLoading && (
				<Box
					sx={{
						width: "20vw",
						height: "20vh",
						marginLeft: "auto",
						marginRight: "auto",
						marginTop: "80px",
						marginBottom: "80px",
					}}
				>
					<WaitingScreen message="Verrechnungskonten werden geladen" />
				</Box>
			)}
		</>
	);
}

export default ChooseClearingAccount;
