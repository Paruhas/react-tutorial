import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import "./css/Page004.css";

function Page004() {
  const [img, setImg] = useState(null);
  const fileRef = useRef(null);
  const textareaRef = useRef(null);

  const uploadFileDiv = () => {
    fileRef.current.click();
  };

  const hideBrokeImgIcon = () => {
    document.documentElement.style.display = "none";
  };

  const submitUploadFile = () => {
    console.log(fileRef.current.files[0]);
  };

  const selectTextareaText = () => {
    textareaRef.current.focus();
    textareaRef.current.select();
  };

  const clearTextareaText = () => {
    textareaRef.current.value = "";
    textareaRef.current.focus();
  };

  return (
    <div>
      <Navbar />
      <h1>PAGE004</h1>
      <h1>useRef</h1>
      <section className="app-section">
        <div className="app-container">
          <div className="upload-file-box">
            <h3>UPLOAD FILE</h3>
            <div className="preview-img-box" onClick={uploadFileDiv}>
              {img && (
                <img
                  src={URL.createObjectURL(fileRef.current.files[0])}
                  alt=""
                  onError={hideBrokeImgIcon}
                  className="preview-img"
                />
              )}
            </div>
            <p>
              <input
                type="file"
                ref={fileRef}
                style={{ display: "none" }}
                onChange={() => setImg(fileRef.current.files[0])}
              />
            </p>
            <button onClick={submitUploadFile}>UPLOAD</button>
          </div>
        </div>
        <div className="app-container">
          <div className="textarea-box">
            <h3>TEXT AREA</h3>
            <p>
              <textarea rows="5" ref={textareaRef} />
            </p>
            <button onClick={selectTextareaText}>SELECT TEXT</button>
            <button onClick={clearTextareaText}>CLEAR TEXT</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page004;
