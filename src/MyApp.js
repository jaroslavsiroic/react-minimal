import React, { useState } from "react";
import AppTitle from "./AppTitle";
import Students from "./Students";

const generateArray = n =>
    [...new Array(n)].map(() => Math.round(Math.random() * 100));

const generateArray2 = (a, b) => {
    if (a < 0 || a > b) return [];
    return [...new Array(b - a + 1)].map((_, index) => a + index);
};

const generateArrayExample = generateArray(10);

const generateRandomArray = n =>
    [...new Array(n)].map(() => Math.round(Math.random() * 24 + 1));

const generateRandomArrayExample = generateRandomArray(10);

const array = [2, 56, 23, 88, 17, 4];

const otherArray = [2, 5, 8, 10];

const makeSquare = array => array.map(v => Math.pow(v, 2));

const squares = makeSquare(otherArray);

const App = () => {
    const [aValue, setA] = useState(0);
    const [bValue, setB] = useState(0);
    const [stateArray, setArray] = useState([]);

    console.log("Value change -> a:" + aValue + " b:" + bValue);
    return (
        <div>
            <h1>Minimal React by Jaroslav Siroic</h1>
            <h2>Lab 1</h2>
            <AppTitle />
            <p>generateArrayExample</p>
            {generateArrayExample.map(item => (
                <span style={{ padding: "10px" }}>{item}</span>
            ))}
            <p>generateRandomArrayExample</p>
            {generateRandomArrayExample.map(item => (
                <span style={{ padding: "10px" }}>{item}</span>
            ))}
            <p>Array</p>
            {array.map(item => {
                if (item >= 15) {
                    return <span style={{ padding: "10px" }}>{item}</span>;
                }
            })}
            <p>makeSquare</p>
            {squares.map(item => (
                <span style={{ padding: "10px" }}>{item}</span>
            ))}
            <Students />
            <hr />
            <h2>Lab 2</h2>
            <label>A:</label>
            <input
                type="number"
                onChange={event => {
                    const change = Number(event.target.value);
                    setA(change);
                    setArray(generateArray2(change, bValue));
                }}
            />
            <label>B:</label>
            <input
                type="number"
                onChange={event => {
                    const change = Number(event.target.value);
                    setB(change);
                    setArray(generateArray2(aValue, change));
                }}
            />
            {stateArray.map(item => (
                <span style={{ padding: "10px" }}>{item}</span>
            ))}
            <footer style={{ height: "500px" }}></footer>
        </div>
    );
};

export default App;
