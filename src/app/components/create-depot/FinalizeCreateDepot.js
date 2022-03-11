import { Container, TextField, Typography } from "@mui/material";

function FinalizeCreateDepot() {
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
            <TextField id="outlined-basic" label="Outlined" variant="outlined" label="Depotname" sx={{
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
            
            <TextField id="outlined-basic" label="Outlined" variant="outlined" label="Buying Power" sx={{
                width: '600px',
                maxWidth: '100%'
            }} />



        </Container>

    );
}

export default FinalizeCreateDepot;