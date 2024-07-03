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

  const deleteColor = (id) => {
    setColorArray((prevColorArray) => {
      return prevColorArray.filter((color) => color.id !== id);
    });
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm colorSubmit={addColor} buttonName={'ADD COLOR'} />
      {!colorArray.length && (
        <p style={{ color: 'hotpink' }}>
          <strong>No Colors...Start by adding one!</strong>
        </p>
      )}
      {colorArray.map((color) => {
        return <Color key={color.id} color={color} deleteColor={() => deleteColor(color.id)} />;
      })}
    </>
  );
}
