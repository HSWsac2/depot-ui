import SearchIcon from "@mui/icons-material/Search";
import { Alert, Box, Card, InputBase, List, Snackbar } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { DepotContext } from "../../../context/DepotContext";
import BuySellDialog from "./BuySellDialog";
import StockElement from "./StockElement";
import "./Trading.css";


export default function Trading() {
	const [tradingDialogOpen, setTradingDialogOpen] = useState(false);
	const [selectedStock, setSelectedStock] = useState(undefined);

	const [allStocks, setAllStocks] = useState([]);

	const [displayedStocks, setDisplayedStocks] = useState([]);
	const [errorMsg, setErrorMsg] = useState("");
	const [isError, setIsError] = useState(false);

	const { currentDepot } = useContext(DepotContext);

	useEffect(() => {
		const fetchStocks = async () => {
			axios
				.get(
					process.env.REACT_APP_BACKEND_URL_TRANSACTION_SERVICE +
					"stocks/current"
				)
				.then((res) => {
					setAllStocks(res.data);
					setDisplayedStocks(res.data);
				});
		};
		fetchStocks();
	}, []);

	function onStockSearch(value) {
		setDisplayedStocks(
			allStocks.filter(
				(stock) =>
					stock.name.toLowerCase().includes(value.toLowerCase()) ||
					stock.isin.toLowerCase().includes(value.toLowerCase())
			)
		);
	}

	function onSelectStock(stock) {
		if (currentDepot) {
			setSelectedStock(stock);
			setTradingDialogOpen(true);
		} else {
			setIsError(true);
			setErrorMsg("Bitte zuerst ein Depot auswählen!");
		}
	}

	function closeDialog() {
		setSelectedStock(undefined);
		setTradingDialogOpen(false);
	}

	return (
		<>
			{allStocks && displayedStocks && (
				<>
					<Box className="stockSearch" sx={{ color: "grey.600" }}>
						<Card
							className="searchCard"
							sx={{ marginBottom: "5vh" }}
						>
							<div className="search">
								<div className="searchIconWrapper">
									<SearchIcon />
								</div>
								<InputBase
									placeholder="Suche nach Wertpapier"
									className="searchfield"
									onInput={(event) =>
										onStockSearch(event.target.value)
									}
								/>
							</div>
							<List sx={{ paddingBottom: 0 }}>
								{displayedStocks.map((stock, index) => (
									<StockElement
										key={index}
										stock={stock}
										isLast={
											index ===
											displayedStocks.length - 1
										}
										onClick={() => onSelectStock(stock)}
									/>
								))}
							</List>
						</Card>
					</Box>
					<BuySellDialog
						isOpen={tradingDialogOpen}
						handleClose={() => closeDialog()}
						stock={selectedStock}
					></BuySellDialog>
					<Snackbar
						open={isError}
						autoHideDuration={2000}
						onClose={() => setIsError(false)}
					>
						<Alert severity="error">{errorMsg}</Alert>
					</Snackbar>
				</>
			)}
		</>
	);
}
