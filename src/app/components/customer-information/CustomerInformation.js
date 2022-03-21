import { AssignmentInd } from "@mui/icons-material";
import { Button, Card, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import "./CustomerInformation.css";

export default function CustomerInformation() {
	const { currentUser } = useContext(UserContext);

	function navigateCustomer() {
		if (currentUser) {
			window.location.href =
				process.env.REACT_APP_FRONTEND_URL_ONLINEBANKING_SERVICE +
				`${currentUser.client_id}/change`;
		}
	}

	return (
		<>
			{currentUser && (
				<div className="customerContainer">
					<div className="customerIcon">
						<AssignmentInd sx={{ fontSize: "13vw" }} />
					</div>
					<div className="customerData">
						<Card className="customerDataCard">
							<Typography variant="h5" className="cardTitle">
								Kontaktdaten
							</Typography>
							<div className="cardContent">
								<TextField
									variant="outlined"
									label="Name"
									disabled
									value={`${currentUser.firstname} ${currentUser.lastname}`}
									className="dataField"
									fullWidth
								/>
								<TextField
									variant="outlined"
									label="Mobilnummer"
									value={currentUser.phone_number}
									className="dataField"
									fullWidth
									disabled
								/>
								<TextField
									variant="outlined"
									label="E-Mail"
									value={currentUser.e_mail}
									className="dataField"
									fullWidth
									disabled
								/>
							</div>
						</Card>
						<Card className="customerDataCard">
							<Typography variant="h5" className="cardTitle">
								Persönliche Daten
							</Typography>
							<div className="cardContent">
								<TextField
									variant="outlined"
									label="Anschrift"
									value={currentUser.adress}
									className="dataField"
									fullWidth
									disabled
								/>
								<TextField
									variant="outlined"
									label="Wohnort"
									value={`${currentUser.plz} ${currentUser.city}`}
									className="dataField"
									fullWidth
									disabled
								/>
								<TextField
									variant="outlined"
									label="Geburtsdatum"
									value={currentUser.birthdate}
									className="dataField"
									fullWidth
									disabled
								/>
								<TextField
									variant="outlined"
									label="Staatsangehörigkeit"
									value={currentUser.nationality}
									className="dataField"
									fullWidth
									disabled
								/>
							</div>
						</Card>
						<Button
							variant="contained"
							onClick={() => navigateCustomer()}
							sx={{ marginBottom: "5vh", textTransform: "none" }}
						>
							Daten bearbeiten
						</Button>
					</div>
				</div>
			)}
		</>
	);
}
