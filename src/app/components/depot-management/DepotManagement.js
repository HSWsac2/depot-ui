import {
	Alert,
	Box,
	Button,
	Container,
	Snackbar,
	Stack,
	TextField,
	Typography
} from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DepotContext } from "../../../context/DepotContext";
import { getErrorMessage } from "../../common/enums/ErrorMessages";
import ConfirmButton from "./ConfirmButton";

export default function DepotManagement() {
	const { currentDepot, invalidateAvailableDepots, selectDepot } = useContext(DepotContext);
	const [errorMsg, setErrorMsg] = useState("");
	const [successMsg, setSuccessMsg] = useState("");
	const [newDepotName, setNewDepotName] = useState(null);

	const [currentStocks, setCurrentStocks] = useState(null);

	useEffect(() => {
		axios
			.get(
				`${process.env.REACT_APP_BACKEND_URL_TRANSACTION_SERVICE}depots/${currentDepot.position_id}/${currentDepot.position_sub_id}/currentStocks`
			)
			.then((res) => {
				setCurrentStocks(res.data);
			});
	}, [currentDepot.position_id, currentDepot.position_sub_id, setCurrentStocks]);

	const handleDeleteDepot = () => {
		axios
			.delete(
				process.env.REACT_APP_BACKEND_URL_DEPOT_SERVICE +
				`depots/${currentDepot.position_id}/${currentDepot.position_sub_id}`
			)
			.then((_res) => {
				invalidateAvailableDepots();
				selectDepot(null)
				setSuccessMsg(
					"Depot erfolgreich gelöscht... jetzt ist es wirklich weg, schade aber auch"
				);
			})
			.catch((error) => {
				setErrorMsg(getErrorMessage(error));
			});
	};

	const changeDepotName = (e) => {
		e.preventDefault();
		axios
			.patch(`${process.env.REACT_APP_BACKEND_URL_DEPOT_SERVICE}depots/${currentDepot.position_id}/${currentDepot.position_sub_id}`, null, {
				params: {
					depot_name: newDepotName
				}
			}
			)
			.then(res => res.data)
			.then((data) => {
				setSuccessMsg(`Depot erfolgreich in ${data.depot_name} umbenannt`);
				invalidateAvailableDepots();
				selectDepot(data);
			})
			.catch((error) => {
				setErrorMsg(getErrorMessage(error));
			});
	};

	return (
		<>
			<Container
				maxWidth="lg"
				spacing={0}
				sx={{

					mt: "4rem",
					mb: "1.5rem"
				}}
			>
				<Stack spacing={12}>
					<Stack spacing={2}>
						<Typography variant="h3">Depot umbenennen</Typography>
						<Typography component="div" variant="body1">
							Hier können Sie Ihrem Depot <Box fontWeight="bold" display="inline">
								{currentDepot.depot_name}
							</Box> einen neuen Namen verleihen.
						</Typography>
						<form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={e => changeDepotName(e)}>
							<TextField
								sx={{
									width: "50rem",
									mb: "1rem",
								}}
								variant="standard"
								label="Neuer Depotname"
								value={newDepotName ?? ""}
								onChange={event => setNewDepotName(event.target.value)}
							/>
							<Button variant="outlined" color="primary" type="submit" disabled={!newDepotName || newDepotName === currentDepot.depot_name} sx={{
								width: "10rem",
							}}>
								Umbenennen
							</Button>
						</form>

					</Stack>
					<Stack spacing={2}>
						<Typography variant="h3">Depot löschen</Typography>
						<Typography component="div">
							Mit Betätigung dieses Buttons löschen Sie ihr Depot{" "}
							<Box fontWeight="bold" display="inline">
								unwiderruflich
							</Box>
							. Beachten Sie, dass archivierte Daten aufgrund gesetzlicher Aufbewahrungsfristen nicht entgültig gelöscht werden können.
						</Typography>
						{currentStocks?.length > 0 && <Typography>Eine Löschung ist nur möglich, wenn sich keine Wertpapiere in Ihrem Depot befinden.</Typography>}
						<Box>
							<ConfirmButton
								buttonText="Depot löschen"
								acceptCallback={handleDeleteDepot}
								dialogTitle="Wollen Sie Ihr Depot wirklich unwiderruflich löschen?"
								color="error"
								dialogBody="Diese Entscheidung kann nicht rückgängig gemacht werden."
								acceptText="Unwiderruflich löschen"
								disabled={!currentStocks || currentStocks.length > 0}
							/>
						</Box>
					</Stack>
				</Stack>
			</Container>
			<Snackbar
				open={Boolean(errorMsg)}
				autoHideDuration={2000}
				onClose={() => setErrorMsg(null)}
			>
				<Alert severity="error">{errorMsg}</Alert>
			</Snackbar>
			<Snackbar
				open={Boolean(successMsg)}
				autoHideDuration={2000}
				onClose={() => setSuccessMsg(null)}
			>
				<Alert severity="success">{successMsg}</Alert>
			</Snackbar>
		</>
	);
}
