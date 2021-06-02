import React, { Component } from "react";
import PopulationChart from "./Components/PopulationChart";

import "./Homepage.css";
import fetch from "node-fetch";

//this page deal with Japanese province checkbox and import chart compnent
class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prefNamesAndIds: [],
            selectedProvince: [],
            allPopulationDataMap: new Map(),
        };
        this.checkboxHandler = this.checkboxHandler.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    // fetch data(Japan prefectures names and code) right after the component mounts
    async componentDidMount() {
        const pointerToThis = this;
        const API_key = process.env.REACT_APP_API_KEY;
        let populationDataFunction = [];
        fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
            method: "GET",
            headers: {
                "X-API-KEY": API_key,
            },
        })
            .then((resp) => resp.json())
            .then(function (data) {
                //console.log(data);
                for (var result in data["result"]) {
                    populationDataFunction.push(data["result"][result]);
                }
                //console.log(populationDataFunction);
                pointerToThis.setState({
                    prefNamesAndIds: populationDataFunction,
                });
            })
            .catch(function (error) {
                console.log(error);
            });

        // fetch all population data at the first place
        for (let i = 1; i <= 47; i++) {
            let prefDataFunction = [];
            fetch(
                `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${i}`,
                {
                    method: "GET",
                    headers: {
                        "X-API-KEY": API_key,
                    },
                }
            )
                .then((resp) => resp.json())
                .then(function (data) {
                    for (var result in data["result"]["data"]) {
                        prefDataFunction.push(
                            data["result"]["data"][result]["data"]
                        );
                    }
                    pointerToThis.setState({
                        selectedProvincePopulationData: prefDataFunction,
                    });
                    pointerToThis.setState((prevState) => {
                        const nextRows = prevState.allPopulationDataMap.set(
                            i,
                            prefDataFunction
                        );
                        // Creating a new Map this way does not clone the original data
                        // This means that any update to an object in the map will update the previous map.
                        // To avoid this, we create a new object using object spread and assign the updated value there.
                        // This has the benefit of reducing memory allocations as well, if performance is your concern.
                        // Though it should not be until you have proven it to be a concern.

                        return { allPopulationDataMap: nextRows };
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    checkboxHandler(event) {
        if (event.target.checked) {
            this.setState({
                selectedProvince: [
                    ...this.state.selectedProvince,
                    event.target.value,
                ],
            });
        } else {
            this.setState({
                selectedProvince: this.state.selectedProvince.filter(
                    (pref) => pref !== event.target.value
                ),
            });
        }
    }

    render() {
        if (this.state.map !== undefined) {
            return null;
        }
        return (
            <div className="homepage">
                <h3>都道府県</h3>
                <p>
                    {this.state.prefNamesAndIds.map((pref) => {
                        return (
                            <span key={pref["prefName"]}>
                                <input
                                    type="checkbox"
                                    value={pref["prefCode"]}
                                    defaultChecked={false}
                                    onChange={this.checkboxHandler}
                                />
                                {`${pref["prefName"]}`}
                            </span>
                        );
                    })}
                </p>
                <PopulationChart
                    selectedProvince={this.state.selectedProvince}
                    map={this.state.allPopulationDataMap}
                    prefNamesAndIds={
                        this.state.prefNamesAndIds
                    }></PopulationChart>
            </div>
        );
    }
}

export default Homepage;
