import { Box, Grid } from '@mui/material';
import * as React from 'react';
import NavigationTabs from './NavigationTabs';
import HeaderBar from './HeaderBar';

interface FrameProps {
    children?: React.ReactNode;
    role: string;
    setRole(customer: string): void;
}

const Frame = ({ children, role, setRole }: FrameProps) => {
    return (
        <>
            <HeaderBar role={role} setRole={setRole} />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={10}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <NavigationTabs />
                        </Box>

                        {children}

                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Frame;