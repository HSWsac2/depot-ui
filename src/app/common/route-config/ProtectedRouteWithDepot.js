import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { DepotContext } from "../../../context/DepotContext";
import Frame from "../../components/frame/Frame";
import WaitingScreen from "../WaitingScreen";
import ProtectedRoute from "./ProtectedRoute";
// pass all args to the underlying ProtectedRoute
export default function ProtectedRouteWithDepot({ children, ...args }) {

    const { currentDepot, availableDepotsLoading } = useContext(DepotContext);

    return (
        <ProtectedRoute {...args}>
            {!currentDepot && availableDepotsLoading && (
                <Frame>
                   <WaitingScreen message="Depotinformationen werden geladen" />
                </Frame>
            )}
            {!currentDepot && !availableDepotsLoading && <Redirect to={{ pathname: '/create', state: { noDepotsAvailable: true } }} />}
            {currentDepot && children}
        </ProtectedRoute>
    )
}