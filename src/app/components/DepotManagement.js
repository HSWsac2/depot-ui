import { Stack, Button, Container, Grid, Box, Typography } from "@mui/material";

export default function DepotManagement() {
    return (
        <Container
            maxWidth="lg"
            spacing={0}
            sx={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}
        >
            <Stack spacing={12}>
                <Stack spacing={2}>
                    <Typography variant='h3'>Depot sperren</Typography>
                    <Typography variant='body1'>Mit Betätigung dieses Buttons sperren Sie ihr Depot. Es können keine weiteren Transaktionen durchgeführt werden, bis das Depot wieder entsprerrt wird.</Typography>
                    <Box>
                        <Button variant="outlined" color="error">
                            Depot sperren
                        </Button>
                    </Box>
                </Stack>
                <Stack spacing={2}>
                    <Typography variant='h3'>Depot löschen</Typography>
                    <Typography component='div'>Mit Betätigung dieses Buttons löschen Sie ihr Depot <Box fontWeight='bold' display='inline'>unwiderruflich</Box>. Beachten Sie, dass sich hierfür keine Wertpapiere in ihrem Depot befinden dürfen.</Typography>
                    <Box>
                        <Button variant="outlined" color="error">
                            Depot löschen
                        </Button>
                    </Box>

                </Stack>
            </Stack>
        </Container>
    )
}