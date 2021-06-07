import { forwardRef } from "react";

export function TextareaSelectClear(props) {
  const { selectTextareaText, clearTextareaText } = props;

  return (
    <div className="app-container">
      <div className="textarea-box">
        <h3>TEXT AREA</h3>
        <p>
          <textarea rows="5" />
        </p>
        <button onClick={selectTextareaText}>SELECT TEXT</button>
        <button onClick={clearTextareaText}>CLEAR TEXT</button>
      </div>
    </div>
  );
}
