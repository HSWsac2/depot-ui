import axios from "axios";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { UserContext } from "./UserContext";

export const DepotContext = createContext(null);

const positionIdcookieName = 'positionId';
const positionSubIdcookieName = 'positionSubId';

const defaultCookieOptions = { path: "/", maxAge: 600, sameSite: 'lax' };

export const DepotContextProvider = ({ children }) => {

    const { currentUser } = useContext(UserContext)

    const [currentDepot, setCurrentDepot] = useState(null);
    const [availableDepots, setAvailableDepots] = useState([]);
    const [availableDepotsInvalid, setAvailableDepotsInvalid] = useState(true);

    // get initial deposit based on cookie values
    const [depotCookie, setDepotCookie, removeDepotCookie] = useCookies(['depot'])
    useEffect(() => {
        const { positionId, positionSubId } = depotCookie;
        if (positionId == null || positionSubId == null || currentUser?.client_id == null) return;
        axios.get(process.env.REACT_APP_BACKEND_URL_DEPOT_SERVICE + `depots/${positionId}/${positionSubId}`)
            .then(response => response.data)
            .then(response => setCurrentDepot(response))
            .catch(console.error)

        // the dependency array is intentionally left empty - the initial fetch should not reaccur when the cookie or user
        // changes as those changes are usually accompanied by a dedicated fetch, so fetching the data again would be wasteful
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // get all available depots whenever available depots are invalidated
    useEffect(() => {
        if (!availableDepotsInvalid) return;
        if (!currentUser?.client_id) {
            setAvailableDepots([]);
            setAvailableDepotsInvalid(false);
            return;
        }

        axios.get(process.env.REACT_APP_BACKEND_URL_DEPOT_SERVICE + `depots/${currentUser?.client_id}`)
            .then(response => response.data)
            .then(response => {
                setAvailableDepots(response);

                // if no depot selected: set the current depot
                if (response?.length > 0) {
                    setCurrentDepot(current => current ?? response[0]);
                }
            })
            .catch(console.error)
            .finally(() => setAvailableDepotsInvalid(false))
    }, [currentUser, availableDepotsInvalid])


    // define common functions to be used elsewhere
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

    const invalidateAvailableDepots = useCallback(() => {
        setAvailableDepotsInvalid(true);
    }, [setAvailableDepotsInvalid])

    // invalidate Available Depots when current user changes
    useEffect(() => {
        invalidateAvailableDepots();
    }, [currentUser])

    const depotValue = {
        currentDepot,
        selectDepot,
        deselectDepot,
        availableDepots,
        availableDepotsLoading: availableDepotsInvalid,
        invalidateAvailableDepots,
    }

    return (
        <DepotContext.Provider value={depotValue}>
            {children}
        </DepotContext.Provider>
    )
}