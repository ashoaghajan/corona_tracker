import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../api/api';
import { Line, Bar } from 'react-chartjs-2';
import useStyles from '../styles/useCartStyles'

export interface ChartProps {
    country: string,
    data: Data
}
 
const Chart: React.SFC<ChartProps> = ({ data, country }) => {

    const [dailyData, setDailyData] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        (async function() {
            const data: any = await fetchDailyData();
            setDailyData(data);
        })();
    },[]);

    const lineChart = (
        dailyData[0] && <Line data={{
            labels: dailyData.map((item: DailyDataItem)=> new Date(item.reportDate).toDateString()),
            datasets: [{
                data: dailyData.map((item: DailyDataItem)=> item.confirmed.total),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true
            }, 
            {
                data: dailyData.map((item: DailyDataItem)=> item.deaths.total),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill: true
            }]
        }}/>
    );

    const barChart = (
        data?.confirmed && <Bar 
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                    data: [data.confirmed.value, data.recovered.value, data.deaths.value]
                }]
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${country}` }
            }}
        />
    )

    return ( 
        <div className={classes.container}>
            {country ? barChart : lineChart}
        </div>
    );
}
 
export default Chart;
