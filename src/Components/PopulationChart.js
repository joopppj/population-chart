import React from "react";
import "./PopulationChart.css";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Label,
    ResponsiveContainer,
} from "recharts";

// generate random dark color for lines
function randomColor() {
    var lum = -0.25;
    var hex = String(
        "#" + Math.random().toString(16).slice(2, 8).toUpperCase()
    ).replace(/[^0-9a-f]/gi, "");
    if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    var rgb = "#",
        c,
        i;
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
        rgb += ("00" + c).substr(c.length);
    }
    return rgb;
}

function PopulationChart({ selectedProvince, map, prefNamesAndIds }) {
    //standard data format fir recharts
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
    // auto fill the chart data
    for (let i = 2; i < 13; i++) {
        for (let prefCode of selectedProvince) {
            chartData[i - 2][`${prefNamesAndIds[prefCode - 1].prefName}`] =
                parseInt(map.get(parseInt(prefCode))[0][i].value);
        }
    }
    return (
        <div className="chart">
            <ResponsiveContainer width="100%" height={500}>
                <LineChart
                    width={500}
                    height={400}
                    data={chartData}
                    margin={{
                        top: 3,
                        right: 30,
                        left: 30,
                        bottom: 30,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name">
                        <Label
                            value="年度"
                            offset={-10}
                            position="insideBottom"
                        />
                    </XAxis>
                    <YAxis
                        type="number"
                        dx={5}
                        ticks={[
                            0, 2000000, 5000000, 8000000, 11000000, 14000000,
                        ]}>
                        <Label
                            value="総人口"
                            angle={-90}
                            offset={20}
                            position="left"
                        />
                    </YAxis>
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
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
    );
}

export default PopulationChart;
