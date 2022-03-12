import { createContext } from "react";
import useUser from "../app/hooks/useUser";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {

    const userValue = useUser();

    return (
        <UserContext.Provider value={userValue}>
            {children}
        </UserContext.Provider>
    )
}