import React,{useState , useEffect} from 'react'
import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import BaseUrl from '../BaseUrl';
import { useDispatch ,useSelector } from "react-redux";
import { Chart, registerables} from 'chart.js';

const SellerPrediction = () => {
    Chart.register(...registerables);

    const [allData , setAllData] = useState()
    const User = useSelector((state) => state.user);

    console.error("ALL" , allData)
    const objonly = Object.assign({}, User);

  const getUser = objonly['0'];


  const labels = allData?.map(item => item.productId.productName);
  console.log(labels);
  const values = allData?.map(item => item.quantity);
  console.log(values)


    useEffect(()=>{
    
        const fetchData = async ()=>{
     
           try {
               const res = await BaseUrl.get(`/ecommerce/fetchsellerhistory/${getUser._id}`)
               setAllData(res.data)
           } catch (error) {
               console.log(error)
           }
   
        }
        fetchData()
   
   },[]) 
    


  // Creating the chart configuration object
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Sell Count',
        backgroundColor: 'rgba(75,192,192,0.4)', // Adjust the color as needed
        borderColor: 'rgba(75,192,192,1)', // Adjust the color as needed
        borderWidth: 1,
        data: values,

      },
    ],
  };
// Creating the chart options object
  const chartOptions = {
    scales: {
      y: {
        type:'linear',
        min: 0,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
}

export default SellerPrediction
