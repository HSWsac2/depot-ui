import { Box, Container, Stack, Typography } from "@mui/material";
import useAxios from "../../hooks/useAxios";
import ConfirmButton from "./ConfirmButton";

export default function DepotManagement() {

    const handleDeleteDepot = () => {
        alert("Wenn dieser Knopf jetzt funktioniert hätte, wäre Ihr Depot unwiderruflich gelöscht. Glück für Sie, dass wir noch nicht so weit sind.");
    }

    const handleCloseDepot = () => {
        alert("Depot geschlossen. Wieder öffnen geht aber nicht :-)");
    }

    const { response, error , loading } = useAxios({baseURL: 'https://api.kanye.rest/', method: 'get', url: "/"});
    console.log(response, error, loading)
    return (
        <Container
            maxWidth="lg"
            spacing={0}
            sx={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}
        >
            <Stack spacing={12}>
                { loading && <Typography>Api Lädt</Typography> }
                { response && <div><h1>Kanye Quote of the day</h1> <p>{response.quote}</p></div> }
                { error && <p>Fehler beim Fetch: {error}</p> }

                <Stack spacing={2}>
                    <Typography variant='h3'>Depot schließen</Typography>
                    <Typography variant='body1'>Mit Betätigung dieses Buttons sperren Sie ihr Depot. Es können keine weiteren Transaktionen durchgeführt werden. Beachten Sie, dass sich hierfür keine Wertpapiere in ihrem Depot befinden dürfen.</Typography>
                    <Box>
                        <ConfirmButton 
                            buttonText="Depot schließen"
                            acceptCallback={handleCloseDepot}
                            dialogTitle="Wollen Sie Ihr Depot schließen?"
                            color="error"
                            dialogBody="Eine Wiedereröffnung ist jederzeit an dieser Stelle möglich."
                            acceptText="Schließen"
                        />
                    </Box>
                </Stack>
                <Stack spacing={2}>
                    <Typography variant='h3'>Depot löschen</Typography>
                    <Typography component='div'>Mit Betätigung dieses Buttons löschen Sie ihr Depot <Box fontWeight='bold' display='inline'>unwiderruflich</Box>. Beachten Sie, dass sich hierfür keine Wertpapiere in ihrem Depot befinden dürfen.</Typography>
                    <Box>
                        <ConfirmButton 
                            buttonText="Depot löschen"
                            acceptCallback={handleDeleteDepot}
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