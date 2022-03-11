import { Alert, Container, List, Snackbar } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
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
					`http://localhost:8081/depots/${currentDepot.position_id}/${currentDepot.position_sub_id}/orderHistory`
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

	// const transactions = [
	// 	{
	// 		id: 1,
	// 		name: "Alphabet",
	// 		count: 4,
	// 		pricePerShare: 2350,
	// 		totalPrice: -9400,
	// 		date: "06.12.2021",
	// 	},
	// 	{
	// 		id: 2,
	// 		name: "Meta",
	// 		count: 1,
	// 		pricePerShare: 192,
	// 		totalPrice: -192,
	// 		date: "01.01.2021",
	// 	},
	// 	{
	// 		id: 3,
	// 		name: "Amazon.com, Inc.",
	// 		count: 1,
	// 		pricePerShare: 2672,
	// 		totalPrice: -2672,
	// 		date: "03.07.2021",
	// 	},
	// 	{
	// 		id: 4,
	// 		name: "Alphabet",
	// 		count: 4,
	// 		pricePerShare: 2350,
	// 		totalPrice: -9400,
	// 		date: "06.12.2021",
	// 	},
	// 	{
	// 		id: 5,
	// 		name: "Meta",
	// 		count: 1,
	// 		pricePerShare: 192,
	// 		totalPrice: -192,
	// 		date: "01.01.2021",
	// 	},
	// 	{
	// 		id: 6,
	// 		name: "Amazon.com, Inc.",
	// 		count: 1,
	// 		pricePerShare: 2672,
	// 		totalPrice: -2672,
	// 		date: "03.07.2021",
	// 	},
	// 	{
	// 		id: 7,
	// 		name: "Alphabet",
	// 		count: 4,
	// 		pricePerShare: 2350,
	// 		totalPrice: -9400,
	// 		date: "06.12.2021",
	// 	},
	// 	{
	// 		id: 8,
	// 		name: "Meta",
	// 		count: 1,
	// 		pricePerShare: 192,
	// 		totalPrice: -192,
	// 		date: "01.01.2021",
	// 	},
	// 	{
	// 		id: 9,
	// 		name: "Amazon.com, Inc.",
	// 		count: 1,
	// 		pricePerShare: 2672,
	// 		totalPrice: -2672,
	// 		date: "03.07.2021",
	// 	},
	// ];

	return (
		<>
			<Container maxWidth="lg" spacing={0} sx={{ marginTop: "2rem" }}>
				<List>
					{transactions.map((transaction, index) => (
						<TransactionElement
							key={transaction.transaction_id}
							transaction={transaction}
							isLast={index === transactions.length - 1}
						/>
					))}
				</List>
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
