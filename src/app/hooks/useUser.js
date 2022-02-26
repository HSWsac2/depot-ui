import { useCallback, useState } from "react";
import { useCookies } from "react-cookie";

const cookieName = 'user';

const useUser = () => {
    const [userCookie, setUserCookie, removeUserCookie] = useCookies(['user']);

    const [currentUser, setCurrentUser] = useState(userCookie.user ?? null)

    const logout = useCallback(() => {
        setCurrentUser(null)
        removeUserCookie(cookieName);
    }, [setCurrentUser, removeUserCookie]);

    const login = useCallback((user, rememberUser) => {
        setCurrentUser(user)
        if (rememberUser) {
            setUserCookie(cookieName, user, { path: "/", maxAge: 600 });
        } else {
            removeUserCookie(cookieName);
        }
    }, [setCurrentUser, setUserCookie, removeUserCookie])

    return {
        currentUser,
        logout,
        login,
    }
}

export default useUser;
