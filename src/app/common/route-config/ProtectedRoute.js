import { useContext, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { DepotContext } from "../../../context/DepotContext";
import { IdleContext } from "../../../context/IdleContext";
import { UserContext } from "../../../context/UserContext";

// pass all args to the underlying Route
export default function ProtectedRoute({ children, ...args }) {

    const { deselectDepot } = useContext(DepotContext);
    const { currentUser, logout } = useContext(UserContext);

    const isIdle = useContext(IdleContext)

    const location = useLocation();

    useEffect(() => {
        if (isIdle) {
            logout();
            deselectDepot();
        }
    }, [isIdle])

    const targetSearch = location.pathname && location.pathname != '/' ? `?redirect=${location.pathname}` : null

    return (
        <Route {...args}>
            {currentUser === null ?
                <Redirect to={{
                    pathname: "/login",
                    search: targetSearch,
                }} /> : children
            }
        </Route>
    )
}