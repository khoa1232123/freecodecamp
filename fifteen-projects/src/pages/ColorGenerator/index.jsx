import React, { useState } from 'react';
import { Header } from '../../components';
// import Values from 'values.js';

const ColorGenerator = () => {
  const [color, setColor] = useState('');
  const [numColor, setNumColor] = useState(5);
  // const [error, seterror] = useState(false);
  // const [list, setList] = useState([]);
  const [degree, setDegree] = useState('0deg');

  const handleClick = (e) => {
    e.preventDefault();
    const arr = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
    ];
    let arrColor = [];
    for (let i = 0; i < numColor; i++) {
      let stringColor = '#';
      for (let index = 0; index < 6; index++) {
        let randomItem = arr[Math.floor(Math.random() * arr.length)];
        stringColor = stringColor + randomItem;
      }
      arrColor.push(stringColor);
    }
    console.log({ degree, color });
    setColor(arrColor.join());
  };

  return (
    <main>
      <section className="container">
        Degree
        <input
          type="number"
          className="form-control"
          min={0}
          max={270}
          onChange={(e) => setDegree(`${e.target.value}deg`)}
          defaultValue={0}
        />
        Number color
        <input
          type="number"
          min={1}
          className="form-control"
          onChange={(e) => setNumColor(e.target.value)}
        />
        <button onClick={handleClick}>Random Color</button>
      </section>
      <section
        className="container"
        style={{
          background:
            numColor === 1 ? color : `linear-gradient(${degree}, ${color})`,
          transition: '300ms',
        }}
      >
        <Header title="Random color" />
      </section>
    </main>
  );
};

export default ColorGenerator;
