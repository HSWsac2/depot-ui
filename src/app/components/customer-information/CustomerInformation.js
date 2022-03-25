import LaunchIcon from '@mui/icons-material/Launch';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, Button, Card, Link, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import "./CustomerInformation.css";

export default function CustomerInformation() {
	const { currentUser, refreshUser } = useContext(UserContext);
	const [showRefresh, setShowRefresh] = useState(false);

	function refresh() {
		setShowRefresh(false);
		refreshUser();
	}
	
	return (
		<>
			{currentUser && (
				<div className="customerContainer">
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
						<Box sx={{
							marginBottom: "2.5rem"
						}}>
							<Button
								startIcon={<LaunchIcon />}
								component={Link}
								href={`${process.env.REACT_APP_FRONTEND_URL_ONLINEBANKING_SERVICE}customers/${currentUser.client_id}/change`}
								onClick={() => setShowRefresh(true)}
								target="_blank"
								variant="contained"
								sx={{mr: '2rem'}}
							>
								Bearbeiten
							</Button>
							{
								showRefresh && <Button
									startIcon={<RefreshIcon />}
									variant="outlined"
									onClick={() => refresh()}
								>
									Aktualisieren
								</Button>
							}
						</Box>

					</div>
				</div>
			)
			}
		</>
	);
}
