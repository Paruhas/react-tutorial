import { forwardRef } from "react";

const TextareaSelectClear = forwardRef((props, ref) => {
  const { selectTextareaText, clearTextareaText } = props;

  return (
    <div className="app-container">
      <div className="textarea-box">
        <h3>TEXT AREA</h3>
        <p>
          <textarea rows="5" ref={ref} />
        </p>
        <button onClick={selectTextareaText}>SELECT TEXT</button>
        <button onClick={clearTextareaText}>CLEAR TEXT</button>
      </div>
    </div>
  );
});

export default TextareaSelectClear;
