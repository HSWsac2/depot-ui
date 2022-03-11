import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const positionIdcookieName = 'positionId';
const positionSubIdcookieName = 'positionSubId';

const defaultCookieOptions = { path: "/", maxAge: 600, sameSite: 'lax' };

const useDepot = (currentUserId) => {

    const [depotCookie, setDepotCookie, removeDepotCookie] = useCookies(['depot'])

    const [currentDepot, setCurrentDepot] = useState(null)

    const selectDepot = useCallback((depot, rememberDepot) => {
        setCurrentDepot(depot);
        if (rememberDepot) {
            setDepotCookie(positionIdcookieName, depot.position_id, defaultCookieOptions)
            setDepotCookie(positionSubIdcookieName, depot.position_sub_id, defaultCookieOptions)
        }
    }, [setCurrentDepot, setDepotCookie])

    const deselectDepot = useCallback(() => {
        setCurrentDepot(null);
        removeDepotCookie(positionIdcookieName, defaultCookieOptions);
        removeDepotCookie(positionSubIdcookieName, defaultCookieOptions);
    }, [setCurrentDepot, removeDepotCookie]);

    // get initial deposit based on cookie values
    useEffect(() => {
        const { positionId, positionSubId } = depotCookie;
        if (positionId == null || positionSubId == null || currentUserId == null) return;
        axios.get(process.env.REACT_APP_BACKEND_URL_DEPOT_SERVICE+`depots/${positionId}/${positionSubId}`)
            .then(response => response.data)
            .then(response => setCurrentDepot(response))
            .catch(console.error)

        // the dependency array is intentionally left empty - the initial fetch should not reaccur when the cookie or user
        // changes as those changes are usually accompanied by a dedicated fetch, so fetching the data again would be wasteful
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return {
        currentDepot,
        selectDepot,
        deselectDepot,
    }
}

export default useDepot;
