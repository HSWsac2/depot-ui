import { Typography } from "@mui/material";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

function DepotCreated() {

    const history = useHistory();

    useEffect(() => {
        setTimeout(() => history.push('/') ,1500)
    })
    return (
        <Typography sx={{ mt: 2, mb: 1 }}>
            Depot wurde erfolgreich erstellt. Sie werden in Kürze weitergeleitet.
        </Typography>
    );
}

export default DepotCreated;