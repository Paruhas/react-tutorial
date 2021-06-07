import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import "./css/Page004.css";

function Page004() {
  const fileRef = useRef(null);

  const uploadFileChange = (event) => {
    fileRef.current = event.target.files[0];
  };

  const submitUploadFile = (event) => {
    console.log(fileRef.current);
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
            <p>
              <input type="file" onChange={uploadFileChange} />
            </p>
            <button onClick={submitUploadFile}>UPLOAD</button>
          </div>
        </div>
        <div className="app-container">
          <div className="textarea-box">
            <h3>TEXT AREA</h3>
            <p>
              <textarea rows="5" />
            </p>
            <button>SELECT TEXT</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page004;
