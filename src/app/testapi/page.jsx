'use client'
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
 

function TestApi() {
  const [hamza , setHamza]  = useState([])
  const [loading , setLodding ]= useState(false)
  const callMeToGetData=async ()=>{
    setLodding(true)

    const  data = await  axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo")
     const datainArray = []
    for (const key in data.data['Time Series (5min)']) {
      datainArray.push( {...data.data['Time Series (5min)'][key] , date : key });
     }
     setTimeout(() => {
      setHamza(datainArray)
      setLodding(false)
     }, 1000);
   
       }
       useEffect(() => {
        callMeToGetData()
      }, [])
      return ( <div>
         <Navbar/>
 
{!loading ?   
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 d:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 d:bg-gray-700 d:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    date
                </th>
                <th scope="col" class="px-6 py-3">
                  1. open 
                </th>
                <th scope="col" class="px-6 py-3">
                   2. high
                </th>
                <th scope="col" class="px-6 py-3">
                   3. low
                </th>
                <th scope="col" class="px-6 py-3">
                4. close 
                </th>
                <th scope="col" class="px-6 py-3">
                4. volume 
                </th>
            </tr>
        </thead>
        <tbody>
   {hamza.map((item )=>(
    <tr class="bg-white border-b d:bg-gray-800 d:border-gray-700 hover:bg-gray-50 d:hover:bg-gray-600">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap d:text-white">
    {item.date}
    </th>
    <td class="px-6 py-4">
    {item[`1. open`]}
    </td>
    <td class="px-6 py-4">
    {item['2. high']}
    </td>
    <td class="px-6 py-4">
    {item['3. low']}
    </td>
    <td class="px-6 py-4">
    {item['4. close']}
    </td>
    <td class="px-6 py-4">
    {item[`5. volume`]}
    </td>
   
  
</tr>
   ))}
        </tbody>
    </table>
</div>:<div>loading</div>}

</div> );
}

export default TestApi;