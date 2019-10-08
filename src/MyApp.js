import React from "react";
import AppTitle from "./AppTitle";
import Students from "./Students";

const generateArray = n =>
    [...new Array(n)].map(() => Math.round(Math.random() * 100));

const generateArrayExample = generateArray(10);

const generateRandomArray = n =>
    [...new Array(n)].map(() => Math.round(Math.random() * 24 + 1));

const generateRandomArrayExample = generateRandomArray(10);

const array = [2, 56, 23, 88, 17, 4];

const otherArray = [2, 5, 8, 10];

const makeSquare = array => array.map(v => Math.pow(v, 2));

const squares = makeSquare(otherArray);

const App = () => (
    <div>
        <h1>Minimal React by Jaroslav Siroic</h1>
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
    </div>
);

export default App;