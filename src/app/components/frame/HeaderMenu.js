import { AddBox, Person } from "@mui/icons-material";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import { CircularProgress, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { DepotContext } from "../../../context/DepotContext";
import useAxios from "../../hooks/useAxios";
import { DropdownMenu } from "./DropdownMenu";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorContext } from "../../../context/ColorContext";
import * as React from "react";

export default function HeaderMenu() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const { currentUser, logout } = useContext(UserContext);
	const { currentDepot, selectDepot, deselectDepot } =
		useContext(DepotContext);
	const history = useHistory();

	const { response, error, loading } = useAxios({
		url: `http://localhost:8080/api/depotService/depots/${currentUser?.client_id}`,
		method: "get",
		baseUrl: "",
		active: currentUser?.client_id != null,
	});
	// simply throw the error (for now)
	if (error) {
		throw error;
	}

	useEffect(() => {
		console.log("select?", response, response?.length, currentDepot);
		if (response && response.length > 0 && !currentDepot) {
			selectDepot(response[0]);
		}
	}, [currentDepot, response, selectDepot]);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleLogout = () => {
		logout();
		deselectDepot();
	};
	const handleDepotClicked = (depot) => selectDepot(depot, true);
	const handleCreateDepot = () => history.push("/create");

	const handleSettingsClicked = () => history.push("/data");

	const colorMode = React.useContext(ColorContext);

	return (
		<>
			<Tooltip title="Account settings">
				<IconButton
					onClick={handleClick}
					size="small"
					aria-controls={open ? "account-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
				>
					<Typography color="white">
						{currentDepot
							? `${currentDepot.depot_name}`
							: "Depotauswahl"}
					</Typography>
					<Avatar sx={{ width: 32, height: 32, ml: 1 }}>
						<Person />
					</Avatar>
				</IconButton>
			</Tooltip>
			<DropdownMenu
				anchorEl={anchorEl}
				open={open}
				setAnchorEl={setAnchorEl}
				menuId="account-menu"
			>
				{loading && (
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							paddingBlock: "10px",
						}}
					>
						<CircularProgress />
					</div>
				)}
				{response &&
					response.map((deposit) => (
						<MenuItem
							key={deposit.position_id + deposit.position_sub_id}
							onClick={() => handleDepotClicked(deposit)}
						>
							{/* Will be the deposit name soon */}
							<Avatar></Avatar>
							{deposit.depot_name}
						</MenuItem>
					))}

				<Divider />
				<MenuItem onClick={handleCreateDepot}>
					<ListItemIcon>
						<AddBox fontSize="small" />
					</ListItemIcon>
					Depot erstellen
				</MenuItem>
				<MenuItem onClick={handleSettingsClicked}>
					<ListItemIcon>
						<Settings fontSize="small" />
					</ListItemIcon>
					Einstellungen
				</MenuItem>
				<MenuItem onClick={handleLogout}>
					<ListItemIcon>
						<Logout fontSize="small" />
					</ListItemIcon>
					Logout
				</MenuItem>
				<MenuItem onClick={colorMode.toggleColorMode} color="inherit">
					<ListItemIcon>
						{colorMode.mode === "dark" ? (
							<Brightness7Icon />
						) : (
							<Brightness4Icon />
						)}
					</ListItemIcon>
					{colorMode.mode === "dark" ? "Light Mode" : "Night Mode"}
				</MenuItem>
			</DropdownMenu>
		</>
	);
}
