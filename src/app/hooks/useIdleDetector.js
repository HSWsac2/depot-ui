import { useEffect, useRef, useState } from "react";

const events = ['mousemove', 'keydown'];

const useIdleDetector = (idleSeconds, dependencies = []) => {

    const timeout = useRef(null);
    const [idle, setIdle] = useState(false);

    const restartTimer = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        if (idle) return;

        timeout.current = setTimeout(() => {
            setIdle(true);
        }, idleSeconds * 1000);
    }

    // initialize event listeners
    useEffect(() => {
        events.forEach(event => window.addEventListener(event, restartTimer));
        
        return () => {
            events.forEach(event => window.removeEventListener(event, restartTimer));
        }
    }, []);

    useEffect(() => {
        setIdle(false);
        restartTimer();
    }, [...dependencies]);


    return idle;
}

export default useIdleDetector;