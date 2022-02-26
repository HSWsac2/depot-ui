import { useContext } from "react";
import { Route } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import Login from "../../common/login/Login";

// pass all args to the underlying Route
export default function ProtectedRoute({ children, ...args }) {

    const { currentUser } = useContext(UserContext)

    return (
        <Route {...args}>
            {currentUser === null ?
                <Login /> :
                children
            }
        </Route>
    )
}