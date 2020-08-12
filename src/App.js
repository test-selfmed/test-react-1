import React, {Component} from 'react';
import './App.css';
import {Evaluation} from "./cmps/Evaluation";
import Button from "@material-ui/core/es/Button";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: 4,
            maxStars: 5
        };
        this.delStar = this.delStar.bind(this);
        this.addStar = this.addStar.bind(this);
    }


    componentDidMount() {
        // exo 1 reduce
        const input = [
            {value: 'FR', label: "France"},
            {value: 'EN', label: "Angleterre"}
        ];

        const output = this.arrayToObject(input);
        console.log(output, 'output => {FR: "France", EN: "Angleterre"}');

        // exo 2
        const input4 = {
            a: [
                {
                    b: "greg",
                    c: {
                        a: "greg"
                    }
                }
            ],
            b: {
                c: "greg",
                a: "sabri",
                e: "arthur",
                d: [
                    {
                        a: "reever",
                        b: {
                            a: "sabri",
                            b: "reever",
                            c: "arthur"
                        }
                    }
                ]
            },
            c: {
                c: "greg",
                a: "sabri",
                e: "arthur",
                d: [
                    {
                        a: "reever"
                    }
                ]
            }
        };
        const output4 = this.find(input4, "greg"); // ["greg", "greg", "greg", "greg"]
        console.log(output4);

        // exo 3
        const input3 = [
            {city: 'Paris', temp: 10},
            {city: "Lyon", temp: 15},
            {city: "Marseille", temp: 20},
            {city: "Bordeaux", temp: 18}];
        const output3 = this.temperatureAverage(input3);
        console.log(output3, "output3 => 15.75");


        // exo 4 Bonus
        const input2 = [1, 1, 5, 'a', '7', 'B', '3', '1', '2', 2, 10, true, false, '7', 7, 3, true, '2', 'a', 2, 2];
        const output2 = this.sortValue(input2);
        console.log(output2, 'output2 => {0: [1,1], 1: [5], 2: ["a", "a"], 3: ["7", "7"], 4: ["B"], 5: ["3"], 6: ["2", "2"], 7: [2, 2, 2], ...}');
    }


    arrayToObject(input) { //  [{value: 'FR', label: "France"}]
        return input.reduce((acc, item) => {
            acc[item.value] = item.label;
            return acc;
        }, {});
    }

    find(input, name)
    {

        let result = [];
        if (typeof input  === "string")
        {
            if (input === name){
                // We found a string matching the name, we push in the result array
                result.push(input);
            }

        }
        else if (input instanceof Array) {
            input.forEach(val => {
               result =  result.concat(this.find(val, name));
            })
        }
        else if (!(input instanceof Array)) {
            for (const [key, value] of Object.entries(input)) {
                result = result.concat(this.find(value, name));
            }
        }
        return result;
    }

    temperatureAverage(input) {
        return input.reduce((acc, val) => { return acc + val.temp / input.length;}, 0);
    }

    sortValue(input) {
    }

    delStar() {
        if (this.state.maxStars >= 0 && this.state.stars > 0) {
            this.setState({stars: this.state.stars - 1});
       }
    }

    addStar() {
        if (this.state.stars < this.state.maxStars) {
            this.setState({stars: this.state.stars + 1})
        }
    }

    render() {
        const {stars} = this.state;

        return (
            <div className="App">
                <Button onClick={() => {
                    this.delStar()
                }}>-</Button>
                <Evaluation maxStars={this.state.maxStars} stars={stars}/>
                <Button onClick={() => {
                    this.addStar()
                }}>+</Button>
            </div>

        );
    }
}

export default App;
