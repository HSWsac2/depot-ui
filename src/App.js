import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import * as React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import { ColorContext } from "./context/ColorContext";
import { DepotContextProvider } from "./context/DepotContext";
import { IdleContextProvider } from "./context/IdleContext";
import { UserContextProvider } from "./context/UserContext";
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

	return (
		<StyledEngineProvider injectFirst>
			<ColorContext.Provider value={colorMode}>
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
			</ColorContext.Provider>
		</StyledEngineProvider>
	);
}

export default App;
