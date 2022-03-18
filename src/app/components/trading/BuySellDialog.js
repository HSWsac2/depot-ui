import {
	Alert,
	Button,
	Dialog,
	DialogContentText,
	DialogTitle,
	Snackbar,
	TextField,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { DepotContext } from "../../../context/DepotContext";
import { UserContext } from "../../../context/UserContext";
import "./BuySellDialog.css";

export default function BuySellDialog({ stock, isOpen, handleClose }) {
	const [amount, setAmount] = useState("");
	const [errorOpen, setErrorOpen] = useState(false);
	const [successOpen, setSuccessOpen] = useState(false);
	const [method, setMethod] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
	const [isError, setIsError] = useState(false);
	const [ownedAmount, setOwnedAmount] = useState("");

	function closeDialog() {
		setAmount("");
		handleClose();
	}

	const { currentUser } = useContext(UserContext);
	const { currentDepot } = useContext(DepotContext);

	useEffect(() => {
		const fetchStock = async () => {
			axios
				.get(
					process.env.REACT_APP_BACKEND_URL_TRANSACTION_SERVICE +
						`depots/${currentDepot.position_id}/${currentDepot.position_sub_id}/currentStocks`
				)
				.then((res) => {
					let found;
					res.data.forEach((fetchedStock) => {
						if (fetchedStock.isin === stock.isin) {
							setOwnedAmount(fetchedStock.piece_amt);
							found = true;
						}
					});
					if (!found) {
						setOwnedAmount(0);
					}
				});
		};
		if (stock) {
			fetchStock();
		}
	}, [stock]);

	function buyStock() {
		setMethod("buy");
		if (amount) {
			//TODO set position and sub id correctly
			axios
				.post(
					process.env.REACT_APP_BACKEND_URL_TRANSACTION_SERVICE +
						`orders/${currentDepot.position_id}/${currentDepot.position_sub_id}`,
					{
						stock_isin: stock.isin,
						amount: parseInt(amount),
						price_per_stock: stock.price_per_stock,
					}
				)
				.then((res) => {
					setSuccessOpen(true);
					setOwnedAmount(ownedAmount + parseInt(amount));
				})
				.catch((error) => {
					setErrorMsg(error.response.data);
					setIsError(true);
				});
		} else {
			setIsError(true);
		}
	}

	function sellStock() {
		setMethod("sell");
		if (amount) {
			if (ownedAmount >= parseInt(amount)) {
				axios
					.post(
						process.env.REACT_APP_BACKEND_URL_TRANSACTION_SERVICE +
							`orders/${currentDepot.position_id}/${currentDepot.position_sub_id}`,
						{
							stock_isin: stock.isin,
							amount: parseInt(amount * -1),
							price_per_stock: stock.price_per_stock,
						}
					)
					.then((res) => {
						setSuccessOpen(true);
						setOwnedAmount(ownedAmount - parseInt(amount));
					})
					.catch((error) => {
						setErrorMsg(error.response.data);
						setIsError(true);
					});
			} else {
				setErrorMsg("Nicht genügend Wertpapiere vorhanden");
				setErrorOpen(true);
			}
		} else {
			setIsError(true);
		}
	}

	function enterAmount(value) {
		setAmount(value);
		setIsError(false);
	}

	function closeToasts() {
		setSuccessOpen(false);
		setErrorOpen(false);
	}

	return (
		<>
			{stock && (
				<>
					<Dialog
						open={isOpen}
						onClose={() => closeDialog()}
						PaperProps={{
							sx: { minHeight: "20vw", minWidth: "20vw" },
						}}
					>
						<DialogTitle className="tradingTitle">{`${stock.name} handeln`}</DialogTitle>
						<svg
							style={{
								maxWidth: "90px",
								maxHeight: "50px",
								marginLeft: "auto",
								marginRight: "auto",
								marginBottom: "20px",
							}}
						>
							<image
								href={stock.link}
								style={{
									width: "90px",
									transform: "translateY(25%",
								}}
							></image>
						</svg>
						<DialogContentText className="tradingContent">{`Aktueller Preis: ${Number(
							stock.price_per_stock
						).toFixed(2)}€`}</DialogContentText>
						<DialogContentText className="tradingContent">{`Anzahl im Besitz: ${ownedAmount}`}</DialogContentText>
						<div className="amount">
							<DialogContentText className="tradingContent amountLabel">
								Anzahl zu handeln:{" "}
							</DialogContentText>
							<TextField
								variant="outlined"
								label="Anzahl"
								className="amountField"
								error={isError}
								value={amount}
								onChange={(event) =>
									enterAmount(event.target.value)
								}
								sx={{ display: "inline", marginRight: "20px" }}
							></TextField>
						</div>
						{amount.length > 0 && (
							<DialogContentText
								className="tradingContent"
								sx={{ marginTop: "10px" }}
							>{`Gesamtpreis: ${Number(
								amount * stock.price_per_stock
							).toFixed(2)}€`}</DialogContentText>
						)}
						<div className="tradingActions">
							<Button
								variant="contained"
								className="tradingButton"
								onClick={() => buyStock()}
								sx={{ minWidth: "90px" }}
							>
								Kaufen
							</Button>
							<Button
								variant="contained"
								className="tradingButton"
								onClick={() => sellStock()}
								sx={{ minWidth: "90px" }}
							>
								Verkaufen
							</Button>
						</div>
					</Dialog>
					<Snackbar
						open={errorOpen}
						autoHideDuration={4000}
						onClose={() => closeToasts()}
					>
						<Alert
							onClose={() => closeToasts()}
							severity="error"
						>{`Konnte Wertpapier ${stock.name} nicht ${
							method == "buy" ? "kaufen" : "verkaufen"
						}. Fehler: ${errorMsg}.`}</Alert>
					</Snackbar>
					<Snackbar
						open={successOpen}
						autoHideDuration={2000}
						onClose={() => closeToasts()}
					>
						<Alert
							onClose={() => closeToasts()}
							severity="success"
						>{`Wertpapier ${stock.name} erfolgreich ${
							method == "buy" ? "gekauft" : "verkauft"
						}.`}</Alert>
					</Snackbar>
				</>
			)}
		</>
	);
}
