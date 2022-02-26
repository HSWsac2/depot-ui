import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const positionIdcookieName = 'positionId';
const positionSubIdcookieName = 'positionSubId';

const useDepot = (currentUserId) => {

    const [depotCookie, setDepotCookie, removeDepotCookie] = useCookies(['depot'])

    const [currentDepot, setCurrentDepot] = useState(null)

    const selectDepot = useCallback((depot, rememberDepot) => {
        setCurrentDepot(depot);
        if (rememberDepot) {
            setDepotCookie(positionIdcookieName, depot.position_id, { path: "/", maxAge: 600 })
            setDepotCookie(positionSubIdcookieName, depot.position_sub_id, { path: "/", maxAge: 600 })
        }
    }, [setCurrentDepot, setDepotCookie])

    const deselectDepot = useCallback(() => {
        setCurrentDepot(null);
        removeDepotCookie(positionIdcookieName);
        removeDepotCookie(positionSubIdcookieName);
    }, [setCurrentDepot, removeDepotCookie]);

    // get initial deposit based on cookie values
    useEffect(() => {
        const { positionId, positionSubId } = depotCookie;
        if (positionId == null || positionSubId == null || currentUserId == null) return;
        axios.get(`http://localhost:8080/api/depotService/deposits/${positionId}/${positionSubId}`)
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
