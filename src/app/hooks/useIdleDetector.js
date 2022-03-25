import { useCallback, useEffect, useRef, useState } from "react";

const events = ['mousemove', 'keydown'];

const useIdleDetector = (idleSeconds, dependencies = []) => {

    const timeout = useRef(null);
    const [idle, setIdle] = useState(false);

    const restartTimer = useCallback(() => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        if (idle) return;

        timeout.current = setTimeout(() => {
            setIdle(true);
        }, idleSeconds * 1000);
    }, [timeout, idle, idleSeconds, setIdle]);

    // initialize event listeners
    useEffect(() => {
        events.forEach(event => window.addEventListener(event, restartTimer));
        
        return () => {
            events.forEach(event => window.removeEventListener(event, restartTimer));
        }
    }, [restartTimer]);

    useEffect(() => {
        setIdle(false);
        restartTimer();
        // make sure this stays consistent with the elements used in useEffect
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setIdle, restartTimer, ...dependencies]);


    return idle;
}

export default useIdleDetector;