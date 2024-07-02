import { useState } from 'react';
import './Color.css';

export default function Color({ color, deleteColor }) {
  const [confirmationMSG, setConfirmationMSG] = useState(false);

  const clickHandler = () => {
    setConfirmationMSG(!confirmationMSG);
  };

  const deleteHandler = (id) => {
    deleteColor(id);
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {!confirmationMSG ? (
        <button onClick={clickHandler}>DELETE</button>
      ) : (
        <>
          <p className="color-card-highlight">Really Delete?</p>
          <button onClick={() => setConfirmationMSG(!confirmationMSG)}>CANCEL</button>
          <button onClick={() => deleteHandler(color.id)}>DELETE</button>
        </>
      )}
    </div>
  );
}
