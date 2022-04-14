const FormRow_51 = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div>
      <di className="form-row">
        <label htmlFor={name} className="form-label">
          {labelText || name}
        </label>
        <input
          type={type}
          value={value}
          name={name}
          className="form-input"
          onChange={handleChange}
        />
      </di>
    </div>
  );
};

export default FormRow_51;
