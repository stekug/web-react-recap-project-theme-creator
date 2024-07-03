import { useState } from 'react';
import './ColorForm.css';

export default function ColorForm({ colorSubmit, buttonName, colorData }) {
  const [role, setRole] = useState(colorData?.role || '');
  const [hexColor, setHexColor] = useState(colorData?.hex || '#ff004c');
  const [hexContrast, setHexContrast] = useState(colorData?.contrastText || '#FFFFFF');

  const updateHexColor = (event) => {
    setHexColor(event.target.value);
  };

  const updateHexContrast = (event) => {
    setHexContrast(event.target.value);
  };

  const updateRole = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newColor = { role: event.target.role.value, hex: hexColor, contrastText: hexContrast };
    colorSubmit(newColor);
  };

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      {/* Role */}
      <label htmlFor="role">Role</label>
      <input
        type="text"
        name="role"
        id="role"
        required
        value={role}
        onChange={updateRole}
        placeholder="Your Role Name"
      />
      {/* Hex */}
      <label htmlFor="hex">Hex</label>
      <input type="text" name="hex" id="hex" value={hexColor} onChange={updateHexColor} />
      <input type="color" name="hexColor" id="hexColor" value={hexColor} onChange={updateHexColor} />
      {/* Contrast */}
      <label htmlFor="contrastText">Contrast Text</label>
      <input type="text" name="contrastText" id="contrastText" value={hexContrast} onChange={updateHexContrast} />
      <input type="color" name="hexContrast" id="hexContrast" value={hexContrast} onChange={updateHexContrast} />
      {/* Button */}
      <button className="color-form__button" aria-label="add color">
        {buttonName}
      </button>
    </form>
  );
}
