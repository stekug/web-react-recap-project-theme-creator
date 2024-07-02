import { initialColors } from './lib/colors';
import Color from './Components/Color/Color';
import ColorForm from './Components/ColorForm/ColorForm';
import './App.css';
import { useState } from 'react';

export default function App() {
  const [colorArray, setColorArray] = useState(initialColors);

  const addColor = (newColor) => {
    setColorArray([{ id: crypto.randomUUID(), ...newColor }, ...colorArray]);
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm colorSubmit={addColor} />
      {colorArray.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}
