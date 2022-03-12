import { Alert, Snackbar } from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CreateDepotStepper from './CreateDepotStepper';

function CreateDepot() {

    const location = useLocation();
    const [showNoDepotsAvailableMessage, setShowNoDepotsAvailableMessage] = useState(location.state?.noDepotsAvailable);

    return (
        <>
            <CreateDepotStepper />
            <Snackbar
                open={showNoDepotsAvailableMessage}
                autoHideDuration={4000}
                onClose={() => setShowNoDepotsAvailableMessage(false)}
            >
                <Alert severity="info">
                    Bitte erstellen Sie zunächst ein Depot.
                </Alert>
            </Snackbar>
        </>
    );
}

export default CreateDepot;