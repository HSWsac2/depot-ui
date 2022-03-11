import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { useMemo, useState } from 'react';
import CustomerInformation from '../customer-information/CustomerInformation';
import ClearingAccount from './ChooseClearingAccount';
import DepotCreated from './DepotCreated';
import FinalizeCreateDepot from './FinalizeCreateDepot';

const steps = [
    {
        label: 'Benutzerdaten verifizieren',
        component: <CustomerInformation />,
    },
    {
        label: 'Verrechnungskonto auswählen',
        component: <ClearingAccount />,
    },
    {
        label: 'Depot erstellen',
        component: <FinalizeCreateDepot />,
    }
];

export default function HorizontalLinearStepper({ }) {
    const [activeStepIndex, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const activeStep = useMemo(() => steps[activeStepIndex], [activeStepIndex])

    return (
        <Box sx={{ width: '100%', my: '2rem' }}>
            <Stepper activeStep={activeStepIndex} sx={{ mb: '2rem' }}>
                {steps.map(({ label }) => {
                    return (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStepIndex === steps.length ? (
                <DepotCreated />
            ) : (
                <>
                    {activeStep.component}
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            variant="outlined"
                            disabled={activeStepIndex === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Zurück
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />

                        <Button variant="contained" onClick={handleNext}>
                            {activeStepIndex === steps.length - 1 ? 'Depot erstellen' : 'Weiter'}
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
}