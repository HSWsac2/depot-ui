import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import { useEffect, useMemo, useState } from "react";
import AppRouter from "./AppRouter";
import { ColorContext } from "./context/ColorContext";
import { DepotContextProvider } from "./context/DepotContext";
import { IdleContextProvider } from "./context/IdleContext";
import { UserContextProvider } from "./context/UserContext";
import raw from "./depot-ui-startup.txt";

function App() {
	const [mode, setMode] = useState("light");

	const colorMode = useMemo(
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

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	);

	useEffect(() => fetch(raw)
		.then((r) => r.text())
		.then((text) => console.log(text)), []);


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
