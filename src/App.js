import { createTheme, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import * as React from "react";
import "./App.css";
import useDepot from "./app/hooks/useDepot";
import useUser from "./app/hooks/useUser";
import AppRouter from "./AppRouter";
import { ColorContext } from "./context/ColorContext";
import { DepotContext } from "./context/DepotContext";
import { IdleContextProvider } from "./context/IdleContext";
import { UserContext } from "./context/UserContext";
function App() {
	const [mode, setMode] = React.useState("light");

	/*  const theme = createTheme({
      palette: {
        primary: {
          main: '#002884',
          light: '#757ce8',
          contrastText: '#fff'
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
      },
     
    });
  */

	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) =>
					prevMode === "light" ? "dark" : "light"
				);
			},
			mode,
		}),
		[mode]
	);

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					background: { default: "#ba000d" },
				},
			}),
		[mode]
	);

	const userValue = useUser();
	const depotValue = useDepot(userValue.currentUser?.client_id);

	return (
		<StyledEngineProvider injectFirst>
			<ColorContext.Provider value={colorMode}>
				<UserContext.Provider value={userValue}>
					<DepotContext.Provider value={depotValue}>
						<IdleContextProvider>
							<ThemeProvider theme={theme}>
								<AppRouter />
							</ThemeProvider>
						</IdleContextProvider>
					</DepotContext.Provider>
				</UserContext.Provider>
			</ColorContext.Provider>
		</StyledEngineProvider>
	);
}

export default App;
