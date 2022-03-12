import { createContext, useContext } from "react";
import useDepot from "../app/hooks/useDepot";
import { UserContext } from "./UserContext";

export const DepotContext = createContext(null);

export const DepotContextProvider = ({ children }) => {

    const { currentUser } = useContext(UserContext);

    const depotValue = useDepot(currentUser?.client_id);

    return (
        <DepotContext.Provider value={depotValue}>
            {children}
        </DepotContext.Provider>
    )
}