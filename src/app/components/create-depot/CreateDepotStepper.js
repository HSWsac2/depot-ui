import { Alert, Snackbar } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import axios from "axios";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { DepotContext } from "../../../context/DepotContext";
import { UserContext } from "../../../context/UserContext";
import { getErrorMessage } from "../../common/enums/ErrorMessages";
import CustomerInformation from "../customer-information/CustomerInformation";
import ClearingAccount from "./ChooseClearingAccount";
import DepotCreated from "./DepotCreated";
import FinalizeCreateDepot from "./FinalizeCreateDepot";

export default function CreateDepotStepper() {
	const [activeStepIndex, setActiveStep] = useState(0);

	const [depotName, setDepotName] = useState("");
	const [selectedAccount, setSelectedAccount] = useState(undefined);
	const [errorMsg, setErrorMsg] = useState(null);

	const { currentUser } = useContext(UserContext);
	const { selectDepot, invalidateAvailableDepots } = useContext(DepotContext);
	const history = useHistory();

	const steps = [
		{
			label: "Benutzerdaten verifizieren",
			validate: () => {},
		},
		{
			label: "Verrechnungskonto auswählen",
			validate: () =>
				!selectedAccount &&
				"Ein Verrechnungskonto muss ausgewählt sein.",
		},
		{
			label: "Depot erstellen",
			validate: () =>
				!depotName && "Der Depot-Name darf nicht leer sein.",
		},
	];

	const handleNext = () => {
		const validationError = steps[activeStepIndex].validate();
		if (validationError) {
			console.log("validation error:", validationError);
			setErrorMsg(validationError);
			return;
		}

		if (activeStepIndex + 1 === steps.length) {
			axios
				.post(
					`${process.env.REACT_APP_BACKEND_URL_DEPOT_SERVICE}depots`,
					{
						position_id: selectedAccount.id,
						iban: selectedAccount.iban,
						client_id: currentUser.client_id,
						depot_name: depotName,
					}
				)
				.then((response) => response.data)
				.then((response) => {
					selectDepot(response);
					invalidateAvailableDepots();
				})
				.then(() => history.push("/"))
				.catch((error) => {
					setErrorMsg(getErrorMessage(error));
				});
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	return (
		<Box sx={{ width: "100%", my: "2rem" }}>
			<Stepper activeStep={activeStepIndex} sx={{ mb: "2rem" }}>
				{steps.map(({ label }) => {
					return (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					);
				})}
			</Stepper>

			{activeStepIndex === steps.length ? (
				<DepotCreated />
			) : (
				<>
					{activeStepIndex === 0 && <CustomerInformation />}
					{activeStepIndex === 1 && (
						<ClearingAccount
							selectedAccount={selectedAccount}
							setSelectedAccount={setSelectedAccount}
						/>
					)}
					{activeStepIndex === 2 && (
						<FinalizeCreateDepot
							depotName={depotName}
							setDepotName={setDepotName}
						/>
					)}

					<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
						<Button
							color="inherit"
							variant="outlined"
							disabled={activeStepIndex === 0}
							onClick={handleBack}
							sx={{ mr: 1 }}
						>
							Zurück
						</Button>
						<Box sx={{ flex: "1 1 auto" }} />

						<Button variant="contained" onClick={handleNext}>
							{activeStepIndex === steps.length - 1
								? "Depot erstellen"
								: "Weiter"}
						</Button>
					</Box>
				</>
			)}

			<Snackbar
				open={Boolean(errorMsg)}
				autoHideDuration={2000}
				onClose={() => setErrorMsg(null)}
			>
				<Alert severity="error">{errorMsg}</Alert>
			</Snackbar>
		</Box>
	);
}
