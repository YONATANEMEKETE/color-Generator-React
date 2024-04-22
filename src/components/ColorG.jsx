import React, { useState } from 'react';
import '../App.css';

function ColorG() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  function handleColorGenerateHex() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * 15)];
    }

    setColor(hexColor);
    console.log(color);
  }
  function handleColorGenerateRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }
  return (
    <div style={{ height: '100vh', width: '100vw', background: color }}>
      <button
        onClick={
          typeOfColor === 'rgb'
            ? () => {
                setTypeOfColor('hex');
                setColor('#000000');
              }
            : null
        }
      >
        Generate Hex Color
      </button>
      <button
        onClick={
          typeOfColor === 'hex'
            ? () => {
                setTypeOfColor('rgb');
                setColor('rgb(0,0,0)');
              }
            : null
        }
      >
        Generate RGB Color
      </button>
      <button
        onClick={
          typeOfColor === 'hex'
            ? handleColorGenerateHex
            : handleColorGenerateRgb
        }
      >
        Generate Randome Color
      </button>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: '60px',
          marginTop: '30px',
          gap: '20px',
        }}
      >
        <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default ColorG;
