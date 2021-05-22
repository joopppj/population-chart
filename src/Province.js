import React, { Component } from 'react'


class Province extends Component {
    constructor(props) {
        super(props);
        this.state = {
            populationData: []
        }

    }



    componentDidMount() {
        const pointerToThis = this;
        const API_key = "W6TGZJSS7pGWkRn5SnkM4ZUZngGIGzJUY9uz0pOA";;
        let populationDataFunction = [];
        fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
            method: 'GET',
            headers: {
                'X-API-KEY': API_key
            }

        }).then(resp => resp.json())
            .then(function (data) {
                console.log(data);

                for (var result in data['result']) {
                    populationDataFunction.push(data['result'][result]['prefName']);
                }

                console.log(populationDataFunction);
                pointerToThis.setState({
                    populationData: populationDataFunction
                });
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    render() {
        return (
            <div>
                <h2>都道府県</h2>
                <p>{this.state.populationData.map(
                    (value, index) => { return <label><input type="checkbox"></input>{`${value}   `}<span> {'  '}</span></label> }
                )}</p>
            </div>
        )
    }
}

export default Province;
