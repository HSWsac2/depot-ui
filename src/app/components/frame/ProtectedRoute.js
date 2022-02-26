import { useContext, useEffect } from "react";
import { Route } from "react-router-dom";
import { DepotContext } from "../../../context/DepotContext";
import { IdleContext } from "../../../context/IdleContext";
import { UserContext } from "../../../context/UserContext";
import Login from "../../common/login/Login";

// pass all args to the underlying Route
export default function ProtectedRoute({ children, ...args }) {

    const { deselectDepot } = useContext(DepotContext);
    const { currentUser, logout } = useContext(UserContext);

    const isIdle = useContext(IdleContext)

    useEffect(() => {
        if (isIdle) {
            logout();
            deselectDepot();
        }
    }, [isIdle])

    return (
        <Route {...args}>
            {currentUser === null ?
                <Login /> :
                children
            }
        </Route>
    )
}