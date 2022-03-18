import {
	Alert,
	Box,
	Container,
	Snackbar,
	Stack,
	Typography,
} from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { DepotContext } from "../../../context/DepotContext";
import useAxios from "../../hooks/useAxios";
import ConfirmButton from "./ConfirmButton";

export default function DepotManagement() {
	const { currentDepot, invalidateAvailableDepots, deselectDepot } =
		useContext(DepotContext);
	const [errorMsg, setErrorMsg] = useState("");
	const [isError, setIsError] = useState(false);
	const [successMsg, setSuccessMsg] = useState("");
	const [isSuccess, setIsSuccess] = useState(false);

	const handleCloseDepot = () => {
		// alert("Wenn dieser Knopf jetzt funktioniert hätte, wäre Ihr Depot unwiderruflich gelöscht. Glück für Sie, dass wir noch nicht so weit sind.");
		axios
			.delete(
				process.env.REACT_APP_BACKEND_URL_DEPOT_SERVICE +
					`depots/${currentDepot.position_id}/${currentDepot.position_sub_id}`
			)
			.then((res) => {
				setSuccessMsg(
					"Depot erfolgreich gelöscht... jetzt ist es wirklich weg, schade aber auch"
				);
				setIsSuccess(true);
				invalidateAvailableDepots();
			})
			.catch((error) => {
				setErrorMsg(error.response.detail);
				setIsError(true);
			});
	};

	return (
		<>
			<Container
				maxWidth="lg"
				spacing={0}
				sx={{
					display: "flex",
					justifyContent: "center",
					marginTop: "4rem",
				}}
			>
				<Stack spacing={12}>
					<Stack spacing={2}>
						<Typography variant="h3">Depot schließen</Typography>
						<Typography variant="body1">
							Mit Betätigung dieses Buttons sperren Sie ihr Depot.
							Es können keine weiteren Transaktionen durchgeführt
							werden. Beachten Sie, dass sich hierfür keine
							Wertpapiere in ihrem Depot befinden dürfen.
						</Typography>
						<Box>
							<ConfirmButton
								buttonText="Depot schließen"
								acceptCallback={handleCloseDepot}
								dialogTitle="Wollen Sie Ihr Depot schließen?"
								color="error"
								dialogBody="Eine Wiedereröffnung ist jederzeit an dieser Stelle möglich."
								acceptText="Schließen"
							/>
						</Box>
					</Stack>
					<Stack spacing={2}>
						<Typography variant="h3">Depot löschen</Typography>
						<Typography component="div">
							Mit Betätigung dieses Buttons löschen Sie ihr Depot{" "}
							<Box fontWeight="bold" display="inline">
								unwiderruflich
							</Box>
							. Beachten Sie, dass sich hierfür keine Wertpapiere
							in ihrem Depot befinden dürfen.
						</Typography>
						<Box>
							<ConfirmButton
								buttonText="Depot löschen"
								acceptCallback={handleCloseDepot}
								dialogTitle="Wollen Sie Ihr Depot wirklich unwiderruflich löschen?"
								color="error"
								dialogBody="Diese Entscheidung kann nicht rückgängig gemacht werden."
								acceptText="Unwiderruflich löschen"
							/>
						</Box>
					</Stack>
				</Stack>
			</Container>
			<Snackbar
				open={isError}
				autoHideDuration={2000}
				onClose={() => setIsError(false)}
			>
				<Alert severity="error">{errorMsg}</Alert>
			</Snackbar>
			<Snackbar
				open={isSuccess}
				autoHideDuration={2000}
				onClose={() => setIsSuccess(false)}
			>
				<Alert severity="success">{successMsg}</Alert>
			</Snackbar>
		</>
	);
}
