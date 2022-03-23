import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import * as React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import { ColorContext } from "./context/ColorContext";
import { DepotContextProvider } from "./context/DepotContext";
import { IdleContextProvider } from "./context/IdleContext";
import { UserContextProvider } from "./context/UserContext";
import raw from "./depot-ui-startup.txt";

function App() {
	const [mode, setMode] = React.useState("light");

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
				},
			}),
		[mode]
	);

	fetch(raw)
		.then((r) => r.text())
		.then((text) => console.log(text));

	return (
		<StyledEngineProvider injectFirst>
			<ColorContext.Provider value={colorMode}>
				<SnackbarProvider maxSnack={3}>
					<UserContextProvider>
						<DepotContextProvider>
							<IdleContextProvider>
								<ThemeProvider theme={theme}>
									<CssBaseline />
									<AppRouter />
								</ThemeProvider>
							</IdleContextProvider>
						</DepotContextProvider>
					</UserContextProvider>
				</SnackbarProvider>
			</ColorContext.Provider>
		</StyledEngineProvider>
	);
}

export default App;
