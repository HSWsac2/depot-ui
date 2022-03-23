import { AddBox, Person } from "@mui/icons-material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LaunchIcon from '@mui/icons-material/Launch';
import Logout from "@mui/icons-material/Logout";
import { Button, CircularProgress, Link, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ColorContext } from "../../../context/ColorContext";
import { DepotContext } from "../../../context/DepotContext";
import { UserContext } from "../../../context/UserContext";
import { DropdownMenu } from "./DropdownMenu";

export default function HeaderMenu() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const { currentUser } = useContext(UserContext);
	const { logout } = useContext(UserContext);
	const {
		currentDepot,
		selectDepot,
		deselectDepot,
		availableDepots,
		availableDepotsLoading,
	} = useContext(DepotContext);
	const history = useHistory();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleLogout = () => {
		logout();
		deselectDepot();
		history.push("/");
	};
	const handleDepotClicked = (depot) => selectDepot(depot, true);
	const handleCreateDepot = () => history.push("/create");

	const handleSettingsClicked = () => history.push("/data");

	const colorMode = React.useContext(ColorContext);

	return (
		<>
			<Tooltip title="Account settings">
				<Button
					onClick={handleClick}
					size="small"
					aria-controls={open ? "account-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
					sx={{
						textTransform: 'none'
					}}
				>
					<Typography color="white">
						{currentDepot
							? `${currentDepot.depot_name}`
							: "Depotauswahl"}
					</Typography>
					<Avatar sx={{ width: 32, height: 32, ml: 1 }}>
						<Person />
					</Avatar>
				</Button>
			</Tooltip>
			<DropdownMenu
				anchorEl={anchorEl}
				open={open}
				setAnchorEl={setAnchorEl}
				menuId="account-menu"
			>
				{availableDepotsLoading && (
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
				{availableDepots?.map((deposit) => (
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
				<MenuItem
					component={Link}
					href={`${process.env.REACT_APP_FRONTEND_URL_ONLINEBANKING_SERVICE}${currentUser.client_id}/`}
					target='_blank'
				>
					<ListItemIcon>
						<LaunchIcon fontSize="small" />
					</ListItemIcon>
					Zur Kontoübersicht
				</MenuItem>
				<MenuItem onClick={handleSettingsClicked}>
					<ListItemIcon>
						<AccountBoxIcon fontSize="small" />
					</ListItemIcon>
					Persönliche Daten
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
					{colorMode.mode === "dark" ? "Helles Design" : "Dunkles Design"}
				</MenuItem>
			</DropdownMenu>
		</>
	);
}
