import React from 'react';
import './PopulationChart.css'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";



function PopulationChart({ selectedProvince, map, prefNamesAndIds }) {
    // data means currenlt selected prefcode 
    //prefNamesAndIDS is a dictionary for searching prefname 
    //map : key is prefname, values are data 
    /*const lines = data.map((value) => (
        <Line
            key={value}
            name={value}
            type="monotone"
            dataKey={value}
        />
    ));*/
    console.log(map)
    const chartData = [
        {
            name: "1970",

        },
        {
            name: "1975",

        },
        {
            name: "1980",

        },
        {
            name: "1985",

        },
        {
            name: "1990",

        },
        {
            name: "1995",

        },
        {
            name: "2000",

        },
        {
            name: "2005",

        },
        {
            name: "2010",

        },
    ];

    for (let i = 2; i < 11; i++) {
        for (let prefCode of selectedProvince) {
            console.log(prefCode)
            console.log(prefNamesAndIds[prefCode - 1].prefName)
            console.log(map)
            const temp = prefCode // I even tried using a temp variable to store the number
            console.log(typeof prefCode)
            //console.log(parseInt(map.get(prefCode)[0][i].value))
            console.log(map.get(1))
            chartData[i - 2][`${prefNamesAndIds[prefCode - 1].prefName}`] = parseInt(map.get(parseInt(prefCode))[0][i].value)
        }
    }

    //console.log(map.get(1)[0][0].value)
    //console.log(chartData)


    //const dataForFirst = map.get(prefNamesAndIds[7].prefName)
    return (
        <div className="chart">
            {selectedProvince.map(pref => { return <span>{pref + prefNamesAndIds[pref - 1].prefName}</span> })}

            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {selectedProvince.map((value) => (
                        <Line
                            key={value}
                            name={prefNamesAndIds[value - 1].prefName}
                            type="monotone"
                            dataKey={prefNamesAndIds[value - 1].prefName}
                        />
                    ))}


                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="amt" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PopulationChart;
