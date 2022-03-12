import { createContext, useContext } from "react";
import useIdleDetector from "../app/hooks/useIdleDetector";
import { UserContext } from "./UserContext";

export const IdleContext = createContext(null);

export const IdleContextProvider = ({ children }) => {

    const { currentUser } = useContext(UserContext);
    const isIdle = useIdleDetector(300, [currentUser]);

    return (
        <IdleContext.Provider value={isIdle}>
            {children}
        </IdleContext.Provider>
    )
}