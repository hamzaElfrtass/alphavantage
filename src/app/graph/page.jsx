'use client'
import { Chart } from "chart.js";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";



function Graph() {


    useEffect(() => { rebuild() },)

    const rebuild = async () => {
        const data = await axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo")
        const datainArray = []
        for (const key in data.data['Time Series (5min)']) {
            datainArray.push({ ...data.data['Time Series (5min)'][key], date: key });
        }

        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',


            tension: 0,
            data: {

                labels: datainArray.map((item) => (item.date)),
                datasets: [{
                    data: datainArray.map((item) => (item['1. open'])),
                    label: "1. open",
                    borderColor: "rgba(62, 149, 205)",
                    backgroundColor: "rgba(62, 149, 205, 0.1)",
                    fill: true, tension: 0,
                    pointStyle: false,
                }, {
                    data: datainArray.map((item) => (item['2. high'])),
                    label: "2. high",
                    borderColor: "rgba(255, 0, 0)", backgroundColor: "rgba(255, 0, 0, 0.1)",

                    fill: true, tension: 0,
                    pointStyle: false,
                }, {
                    data: datainArray.map((item) => (item['3. low'])),
                    label: "3. low",
                    borderColor: "rgba(0, 128, 0)",
                    backgroundColor: "rgba(0, 128, 0, 0.1)",
                    pointStyle: false,
                    fill: true,
                    tension: 0
                }, {
                    data: datainArray.map((item) => (item['4. close'])),
                    label: "4. close",
                    borderColor: "rgba(255, 165, 0)", backgroundColor: "rgba(255, 165, 0, 0.1)",
                    pointStyle: false,
                    fill: true, tension: 0
                }
                ]
            },
        });
    }

    return (
        <>
            <Navbar />

            <div className=" flex justify-center w-[1400px] mx-auto ">

                <canvas id='myChart' className=" "></canvas>

            </div>
            <div className=" flex justify-center pt-10 ">

                <button type="button" onClick={rebuild} class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Refresh</button>
            </div>
        </>
    )
}

export default Graph;