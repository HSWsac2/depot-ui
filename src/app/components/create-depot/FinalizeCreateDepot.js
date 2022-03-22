import { Container, TextField, Typography } from "@mui/material";

function FinalizeCreateDepot({ depotName, setDepotName }) {
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

        </Container>

    );
}

export default FinalizeCreateDepot;