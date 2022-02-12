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
import { Grid } from '@mui/material';
import './DepotOverview.css';

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

    const labels = ['5', '10', '15', '20', '25', '30']

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
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
                    <h1>130.000,34 €</h1>
                </Grid>
                <Grid item xs={6} md={4}>
                    <p>+0.78%</p>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Line options={options} data={data}></Line>
                </Grid>
                <Grid item xs={12} md={6} border="2px solid" borderColor="black">
                    <h2>Hier stehen 5 Umsätze</h2>
                </Grid>
            </Grid>
        </div>
    );
}