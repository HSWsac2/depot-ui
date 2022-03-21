import {
	Alert,
	Card,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Snackbar,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import WaitingScreen from "../../common/WaitingScreen";
import Frame from "../frame/Frame";

function ChooseClearingAccount({ open, selectedAccount, setSelectedAccount }) {
	const { currentUser } = useContext(UserContext);
	const mockUserId = 4;
	const [accounts, setAccounts] = useState([]);
	const [errorMsg, setErrorMsg] = useState("");
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchAccounts = async () => {
			setIsLoading(true);
			axios
				.get(
					`${process.env.REACT_APP_BACKEND_URL_KONTEN_SERVICE}accounts/${mockUserId}/clearingaccounts`
				)
				.then((res) => {
					setAccounts(res.data.data);
					setIsLoading(false);
				})
				.catch((error) => {
					setErrorMsg(error.response.detail);
					setIsError(true);
				});
		};
		if (open) {
			fetchAccounts();
		}
	}, [open]);

	return (
		<>
			{open && !isLoading && (
				<>
					<div style={{ marginBottom: "30px" }}>
						Verfügbare Verrechnungskonten:
					</div>
					{accounts.map((account) => (
						<span style={{ display: "flex", marginBottom: "40px" }}>
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
								>{`Kontostand: ${account.balance} €`}</p>
							</Card>
						</span>
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
			{open && isLoading && (
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
