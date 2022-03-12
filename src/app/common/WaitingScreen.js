import { CircularProgress, Container, Typography } from "@mui/material";

function WaitingScreen({message}) {
    return (  
        <Container
        maxWidth="lg"
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100%',
        }}>
        <CircularProgress size="10rem" sx={{mb: 5}}/>
        <Typography variant='h2'>{message}</Typography>
    </Container>
    );
}

export default WaitingScreen;