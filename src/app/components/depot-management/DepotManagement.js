import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ConfirmButton from "./ConfirmButton";

export default function DepotManagement() {

    const handleLoeschung = () => {
        alert("Depot gelöscht.");
    }

    const handleSperrung = () => {
        alert("Depot gesperrt. Entsperren geht aber nicht :-)");
    }

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
                        <ConfirmButton 
                            buttonText="Depot sperren"
                            acceptCallback={handleSperrung}
                            dialogTitle="Wollen Sie Ihr Depot sperren?"
                            color="error"
                            dialogBody="Sie können keine Transaktionen durchführen, solange ihr Depot gesperrt ist. Eine Entsperrung ist jederzeit möglich."
                            acceptText="Sperren"
                        />
                    </Box>
                </Stack>
                <Stack spacing={2}>
                    <Typography variant='h3'>Depot löschen</Typography>
                    <Typography component='div'>Mit Betätigung dieses Buttons löschen Sie ihr Depot <Box fontWeight='bold' display='inline'>unwiderruflich</Box>. Beachten Sie, dass sich hierfür keine Wertpapiere in ihrem Depot befinden dürfen.</Typography>
                    <Box>
                        <ConfirmButton 
                            buttonText="Depot löschen"
                            acceptCallback={handleLoeschung}
                            dialogTitle="Wollen Sie Ihr Depot wirklich unwiderruflich löschen?"
                            color="error"
                            dialogBody="Diese Entscheidung kann nicht rückgängig gemacht werden."
                            acceptText="Unwiderruflich löschen"
                        />
                    </Box>

                </Stack>
            </Stack>
        </Container>
    )
}