import { useState } from 'react';
import './Color.css';
import ColorForm from '../ColorForm/ColorForm';

export default function Color({ color, deleteColor, updateColor }) {
  const [showConfirmationMSG, setShowConfirmationMessage] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleDelete = (id) => {
    deleteColor(id);
  };

  const handleEditClick = () => {
    setShowEditForm(!showEditForm);
  };

  if (showEditForm) {
    return (
      <>
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
          <ColorForm
            buttonName={'UPDATE COLOR'}
            colorData={color}
            colorSubmit={(updatedColor) => {
              updateColor(color.id, updatedColor);
              setShowEditForm(false);
            }}
          />
          <button onClick={() => setShowEditForm(!showEditForm)}>CANCEL</button>
        </div>
      </>
    );
  }

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
        <>
          <button onClick={() => setShowConfirmationMessage(!showConfirmationMSG)}>DELETE</button>
          <button onClick={handleEditClick}>EDIT</button>
        </>
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
