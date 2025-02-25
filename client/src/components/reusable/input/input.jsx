import "./input.scss";

const Input = ({ label, error, textbox, ...props }) => {
  return (
    <div className="input_container">
      {label && <label className="input_label">{label}</label>}
      {textbox ? (
        <textarea
          {...props}
          className={`input_field textarea ${error ? "input_error" : ""}`}
        ></textarea>
      ) : (
        <input
          {...props}
          className={`input_field ${error ? "input_error" : ""}`}
        />
      )}
      {error && <p id="error_text">{error}</p>}
    </div>
  );
};

export default Input;
