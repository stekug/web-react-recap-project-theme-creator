import './ColorForm.css';

export default function ColorForm() {
  return (
    <form className="color-form">
      <label htmlFor="role">Role</label>
      <input type="text" name="role" id="role" />
      <label htmlFor="role">Hex</label>
      <input type="text" name="hex" id="hex" />
      <label htmlFor="role">Contrast Text</label>
      <input type="text" name="contrast" id="contrast" />
      <button className="color-form__button">ADD COLOR</button>
    </form>
  );
}
