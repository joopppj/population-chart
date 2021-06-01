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

// generate random color
function randomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var j = 0; j < 6; j += 1) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function PopulationChart({ selectedProvince, map, prefNamesAndIds }) {
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
        {
            name: "2015",
        },
        {
            name: "2020",
        },
    ];
    for (let i = 2; i < 13; i++) {
        for (let prefCode of selectedProvince) {
            chartData[i - 2][`${prefNamesAndIds[prefCode - 1].prefName}`] = parseInt(map.get(parseInt(prefCode))[0][i].value)
        }
    }
    return (
        <div className="chart">
            {/*selectedProvince.map(pref => { return <span>{pref + prefNamesAndIds[pref - 1].prefName}</span> })*/}

            <ResponsiveContainer width="100%" height={500}>
                <LineChart
                    width={500}
                    height={400}
                    data={chartData}
                    margin={{
                        top: 3,
                        right: 30,
                        left: 20,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" label={{ value: '年度', angle: 0, position: 'bottom' }} offset={0} />
                    <YAxis type="number" label={{ value: '総人口', angle: -90, position: 'left' }} dx={5} />
                    <Tooltip />
                    <Legend
                        verticalAlign="top" height={36} />
                    {selectedProvince.map((value) => (
                        <Line
                            legendType="line"
                            key={value}

                            type="monotone"
                            dataKey={prefNamesAndIds[value - 1].prefName}
                            stroke={randomColor()}
                        />
                    ))}

                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PopulationChart;
