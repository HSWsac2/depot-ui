import { CircularProgress, Container, Typography } from "@mui/material";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { DepotContext } from "../../../context/DepotContext";
import Frame from "../../components/frame/Frame";
import ProtectedRoute from "./ProtectedRoute";
// pass all args to the underlying ProtectedRoute
export default function ProtectedRouteWithDepot({ children, ...args }) {

    const { currentDepot, availableDepotsLoading } = useContext(DepotContext);

    return (
        <ProtectedRoute {...args}>
            {!currentDepot && availableDepotsLoading && (
                <Frame>
                    <Container
                        maxWidth="lg"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                        }}>
                        <CircularProgress size="10rem" sx={{mb: 5}}/>
                        <Typography variant='h2'>Depotinformationen werden geladen</Typography>
                    </Container>

                </Frame>
            )}
            {!currentDepot && !availableDepotsLoading && <Redirect to={{ pathname: '/depot-ui/create', state: { noDepotsAvailable: true } }} />}
            {currentDepot && children}
        </ProtectedRoute>
    )
}