import { Container, TextField, Typography } from "@mui/material";

function FinalizeCreateDepot({ depotName, setDepotName, buyingPowerWtf, setBuyingPowerWtf }) {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
        }}>
            <Typography variant="h6" sx={{
                mb: 2
            }}>
                Finalisieren Sie die Erstellung Ihres Depots durch Vergeben eines Namens
            </Typography>
            <TextField
                variant="outlined"
                label="Depotname"
                value={depotName}
                onChange={(event) => setDepotName(event.target.value)}
                sx={{
                    width: '600px',
                    maxWidth: '100%'
                }} />

            <Typography variant="h6" sx={{
                // mb: 2,
                mt: 5,
            }}>
                Bitte geben Sie auch die gewünschte Buying Power an (also wie viel Geld sie haben wollen):
            </Typography>
            <Typography variant="subtitle1" sx={{
                mb: 2
            }}>
                Grüße gehen raus an das Backend-Team
            </Typography>

            <TextField
                variant="outlined"
                label="Buying Power"
                value={buyingPowerWtf}
                onChange={(event) => setBuyingPowerWtf(event.target.value)}
                sx={{
                    width: '600px',
                    maxWidth: '100%'
                }} />



        </Container>

    );
}

export default FinalizeCreateDepot;