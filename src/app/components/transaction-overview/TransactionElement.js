import BusinessIcon from "@mui/icons-material/Business";
import {
	Avatar,
	Box,
	Divider,
	ListItem,
	ListItemAvatar, Typography,
	useMediaQuery
} from "@mui/material";
import moment from "moment";
import React from "react";

const currencyFormat = new Intl.NumberFormat("de-DE", {
	style: "currency",
	currency: "EUR",
});

const TransactionElement = ({ transaction, isLast }) => {
	// hide the icon on small devices
	const bigDevice = useMediaQuery("(min-width:600px)");

	return (
		<>
			<ListItem sx={{ padding: 0 }}>
				{bigDevice && (
					<ListItemAvatar sx={{ marginRight: "12px" }}>
						<Avatar>
							<BusinessIcon />
						</Avatar>
					</ListItemAvatar>
				)}
				<Box
					sx={{
						padding: "12px 32px 16px 12px",
						width: "100%",
					}}
				>
					<Box sx={{ display: "flex", width: "100%" }}>
						<Typography
							variant="h6"
							sx={{
								display: "inline",
								flexGrow: 1,
								fontWeight: "bold",
								marginRight: "12px",
							}}
						>
							{transaction.name}
						</Typography>
						<Typography
							align="right"
							sx={{
								display: "inline",
								fontWeight: "bold",
								color: transaction.sold ? "text.primary" : "error.main",
							}}
						>
							{currencyFormat.format(
								(transaction.sold ? 1 : -1) * 
								transaction.buying_price *
								transaction.piece_amt
							)}
						</Typography>
					</Box>

					<Typography variant="subtitle1">
						{moment(transaction.keydate, "YYYY-MM-DD").format("DD.MM.YYYY")}
					</Typography>
					<Typography variant="body1">
						Anzahl:{" "}
						{`${transaction.sold ? "-" : ""}${transaction.piece_amt}`}
					</Typography>
					<Typography variant="body1">
						Preis pro Stück:{" "}
						{currencyFormat.format(transaction.buying_price)}
					</Typography>
				</Box>
			</ListItem>
			{!isLast && <Divider />}
		</>
	);
};

export default TransactionElement;
