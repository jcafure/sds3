import { useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_URL} from 'utils/requests';
import Chart from 'react-apexcharts';
import {SaleSucess} from 'types/sale'
import {round} from 'utils/format';

type SeriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    labels: {
        categories: string[];
    };
    series: SeriesData[];
}

const BarChart = () => {
    const[chardData, setChartData] = useState<ChartData>({
        labels:{
             categories:[]
    }, 
    series:[
        {
            name: "",
            data: []
    }
]
});

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/sucess-by-seller`)
        .then((response) => {

            const data = response.data as SaleSucess[];
            const myLabels = data.map(x => x.sellerName)
            const mySeries = data.map(x => round(100.0 * x.deals / x.visited,1));

            setChartData({
                labels:{
                     categories: myLabels
            }, 
            series:[
                {
                    name: "% Sucesso",
                    data: mySeries
            }
        ]
        });



            
            console.log(chardData);
        });
    });


    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    return (
     <Chart 
        options={{...options, xaxis: chardData.labels}}
        series={chardData.series}
        type="bar"
        height="240"
     />
    );
  }
  
  export default BarChart;