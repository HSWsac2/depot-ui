import { AddBox, Person } from "@mui/icons-material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import { CircularProgress, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
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
	const { logout } = useContext(UserContext);
	const { currentDepot, selectDepot, deselectDepot, availableDepots, availableDepotsLoading } = useContext(DepotContext);
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
	const handleCreateDepot = () => history.push('/depot-ui/create')

	const handleSettingsClicked = () => history.push('/depot-ui/data')

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
