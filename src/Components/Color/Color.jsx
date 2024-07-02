import { useState } from 'react';
import './Color.css';

export default function Color({ color, deleteColor }) {
  const [showConfirmationMSG, setShowConfirmationMessage] = useState(false);

  const handleConfirmationMessage = () => {
    setShowConfirmationMessage(!showConfirmationMSG);
  };

  const handleDelete = (id) => {
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
      {!showConfirmationMSG ? (
        <button onClick={handleConfirmationMessage}>DELETE</button>
      ) : (
        <>
          <p className="color-card-highlight">Really Delete?</p>
          <button onClick={() => setShowConfirmationMessage(!showConfirmationMSG)}>CANCEL</button>
          <button onClick={() => handleDelete(color.id)}>DELETE</button>
        </>
      )}
    </div>
  );
}
