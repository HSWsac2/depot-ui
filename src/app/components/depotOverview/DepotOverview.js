import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './DepotOverview.css';
import { Grid } from '@mui/material';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function DepotOverview() {

    const labels = ['5', '10', '15', '20', '25', '30'];
    const depot = {
        "position_id": "1234",
        "position_sub_id": "5678",
        "client_id": 1234,
        "buying_power": 500,
        "balance_amt": 20000
      };

    const positions = [
        {
            name: "Tesla",
            amount: 3.8,
            buyingPrice: 3578.78,
            currentPrice: 4000.43
        },
        {
            name: "Microsoft",
            amount: 3,
            buyingPrice: 300.78,
            currentPrice: 4000.43
        },
        {
            name: "Meta",
            amount: 1,
            buyingPrice: 1400.78,
            currentPrice: 3600.43
        },
        {
            name: "Amazon",
            amount: 9,
            buyingPrice: 500.78,
            currentPrice: 300.0
        },
    ]

    //const values = [];

    //positions.forEach(element => values.push(element.))

    const data = {
        labels,
        datasets: [
            {
                label: 'Depotwert',
                data: [1, 3, 328, 373, 433, -26, 540],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }]
    }
    const options = {
        responsive: true,

    };
    return (
        <div>
            <Grid className='depotGrid' container spacing={2}>
                <Grid item xs={6} md={8}>
                    <h1>{depot.balance_amt}€</h1>
                </Grid>
                <Grid item xs={3} md={2}>
                    <p>{depot.buying_power}€ nicht investiert</p>
                </Grid>
                <Grid item xs={3} md={2}>
                    <p>+0.78%</p>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Line options={options} data={data}></Line>
                </Grid>
                <Grid item xs={12} md={12}>
                    <h2>Einzelpositionen</h2>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Anzahl</TableCell>
                                    <TableCell align="right">Einkaufspreis</TableCell>
                                    <TableCell align="right">Aktueller Preis</TableCell>
                                    <TableCell align="right">Wachstum</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {positions.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.amount}</TableCell>
                                        <TableCell align="right">{row.buyingPrice}€</TableCell>
                                        <TableCell align="right">{row.currentPrice}€</TableCell>
                                        <TableCell align="right">{(row.currentPrice - row.buyingPrice) < 0 ? "-" + Number((row.currentPrice * 100 / row.buyingPrice)).toFixed(2) +"%" : "+" + Number((row.currentPrice * 10 / row.buyingPrice)).toFixed(2)+"%"}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    );
}