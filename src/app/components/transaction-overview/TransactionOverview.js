import { Alert, Container, List, Snackbar, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DepotContext } from "../../../context/DepotContext";
import TransactionElement from "./TransactionElement";

const TransactionOverview = () => {
	const [transactions, setTransactions] = useState([]);
	const [errorMsg, setErrorMsg] = useState("");
	const [isError, setIsError] = useState(false);

	const { currentDepot } = useContext(DepotContext);
	useEffect(() => {
		const fetchTransactions = async () => {
			axios
				.get(
					`${process.env.REACT_APP_BACKEND_URL_TRANSACTION_SERVICE}depots/${currentDepot.position_id}/${currentDepot.position_sub_id}/orderHistory`
				)
				.then((res) => {
					setTransactions(res.data);
				});
		};
		if (currentDepot) {
			fetchTransactions();
			setIsError(false);
		} else {
			setErrorMsg("Bitte zunächst ein Depot auswählen!");
			setIsError(true);
		}
	}, [currentDepot]);

	return (
		<>
			<Container maxWidth="lg" spacing={0} sx={{ marginTop: "2rem" }}>
				{transactions.length === 0 && <Typography>
					Sobald Sie <Link to="trade">
						mit dem Handeln beginnen
					</Link>, werden hier Ihre Transaktionen dargestellt. Derzeit sind keine Transaktionen vorhanden.
				</Typography>}
				{transactions.length > 0 && <List>
					{transactions.map((transaction, index) => (
						<TransactionElement
							key={transaction.transaction_id}
							transaction={transaction}
							isLast={index === transactions.length - 1}
						/>
					))}
				</List>}
			</Container>
			<Snackbar
				open={isError}
				autoHideDuration={2000}
				onClose={() => setIsError(false)}
			>
				<Alert severity="error">{errorMsg}</Alert>
			</Snackbar>
		</>
	);
};

export default TransactionOverview;
