import { Box, Tab, Tabs } from '@mui/material';
import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
const NavigationTabs = () => {

    const history = useHistory();
    const location = useLocation();
 
    const tabs = [
        {
            label: "Depotübersicht",
            pathPrefix: "/overview",
            target: "/overview" 
        },
        {
            label: "Depotverwaltung",
            pathPrefix: "/management",
            target: "/management"
        },
        {
            label: "Kundendaten",
            pathPrefix: "/data",
            target: "/data"
        },
        {
            label: "Handel",
            pathPrefix: "/trade",
            target: "/trade"
        },
        {
            label: "Transaktionen",
            pathPrefix: "/transactions",
            target: "/transactions"
        }
    ]

    const selectedTabIndex = tabs.findIndex(tab => location.pathname.startsWith(tab.pathPrefix));

    const a11yProps = (index) => ({
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
    );

    const navigateTo = (target) => {
        history.push(target)
    }

    return (<Box sx={{ borderBottom: 1, borderColor: 'divider' } }>
        <Tabs  value={selectedTabIndex < 0 ? 0 : selectedTabIndex} aria-label="basic tabs example"
        textColor="white"
        indicatorColor="E0E0E0"
        >
            {tabs.map((tab, index) => (
                <Tab
                    key={index}
                    label={tab.label}
                    onClick={() => { navigateTo(tab.target) }}
                    sx={{ minWidth: 200}}
                    
                    
                />
            ))}
        </Tabs>
    </Box>
    )
}

export default NavigationTabs;