import ApexCharts from "apexcharts";
import React, { useEffect, useRef } from "react";

const BarChart = () => {
    const chartRef = useRef(null); // Create a ref to reference the chart element

    useEffect(() => {
        const options = {
            series: [
                {
                    data: [2, 29, 57, 70, 80],
                },
            ],
            chart: {
                type: "bar",
                height: 350,
                width: (window.innerWidth / 2), // Set width to half of the screen
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,

                },
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                categories: [
                    "A2SV 2020 ACCEPTANCE 2 %",
                    "A2SV 2020 ACCEPTANCE 29 %",
                    "A2SV 2020 ACCEPTANCE 57 %",
                    "A2SV 2020 ACCEPTANCE 70 %",
                    "A2SV 2020 ACCEPTANCE 80 %",
                ],
            },
        };
        const chart = new ApexCharts(chartRef.current, options);
        chart.render();
    }, []); // Use an empty dependency array to run this effect only once

    return (
        <div id="chart" ref={chartRef}></div>
    );
};

export default BarChart;
