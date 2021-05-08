import axios from 'axios';
import Chart from 'react-apexcharts';
import {BASE_URL} from 'utils/requests';
import {SaleSum} from 'types/sale'
import { useEffect, useState } from 'react';

type ChardData = {
    labels: string [];
    series: number [];
}
const DonnutsChart = () => {

    const[chardData, setChartData] = useState<ChardData>({labels:[], series:[]})
    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then((response) => {

            const data = response.data as SaleSum[];
            const myLabels = data.map(x => x.sellerName)
            const mySeries = data.map(x => x.sum);
            setChartData({labels: myLabels, series: mySeries});
            console.log(chardData);
        });
    }, []);

    const options = {
        legend: {
            show: true
        }
    }
    return (
        
     <Chart 
        options={{...options, labels: chardData.labels}}
        series={chardData.series}
        type="donut"
        height="240"
     />
     
    );
  }
  
  export default DonnutsChart;