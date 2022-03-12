import { createContext, useCallback, useState } from "react";
import { useCookies } from "react-cookie";

export const UserContext = createContext(null);

const cookieName = 'user';
const defaultCookieOptions = { path: "/", maxAge: 600, sameSite: 'lax' };

export const UserContextProvider = ({ children }) => {

    const [userCookie, setUserCookie, removeUserCookie] = useCookies(['user']);

    const [currentUser, setCurrentUser] = useState(userCookie.user ?? null)

    const logout = useCallback(() => {
        setCurrentUser(null)
        removeUserCookie(cookieName, defaultCookieOptions);
    }, [setCurrentUser, removeUserCookie]);

    const login = useCallback((user, rememberUser) => {
        setCurrentUser(user)
        if (rememberUser) {
            setUserCookie(cookieName, user, defaultCookieOptions);
        } else {
            removeUserCookie(cookieName, defaultCookieOptions);
        }
    }, [setCurrentUser, setUserCookie, removeUserCookie])

    const userValue = {
        currentUser,
        logout,
        login,
    }

    
    return (
        <UserContext.Provider value={userValue}>
            {children}
        </UserContext.Provider>
    )
}