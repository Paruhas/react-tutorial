import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import TextareaSelectClear from "../components/TextareaSelectClear";
import { UploadFile } from "../components/UploadFile";
import "./css/Page004.css";

function Page004() {
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
        <UploadFile
          uploadFileDiv={uploadFileDiv}
          hideBrokeImgIcon={hideBrokeImgIcon}
          submitUploadFile={submitUploadFile}
          ref={fileRef}
        />
        <TextareaSelectClear
          ref={textareaRef}
          selectTextareaText={selectTextareaText}
          clearTextareaText={clearTextareaText}
        />
      </section>
    </div>
  );
}

export default Page004;
