import { forwardRef, useState } from "react";

export const UploadFile = forwardRef((props, ref) => {
  const { uploadFileDiv, hideBrokeImgIcon, submitUploadFile } = props;
  const [img, setImg] = useState(null);

  return (
    <div className="app-container">
      <div className="upload-file-box">
        <h3>UPLOAD FILE</h3>
        <div className="preview-img-box" onClick={uploadFileDiv}>
          {img && (
            <img
              src={URL.createObjectURL(ref.current.files[0])}
              alt=""
              onError={hideBrokeImgIcon}
              className="preview-img"
            />
          )}
        </div>
        <p>
          <input
            type="file"
            ref={ref}
            style={{ display: "none" }}
            onChange={() => setImg(ref.current.files[0])}
          />
        </p>
        <button onClick={submitUploadFile}>UPLOAD</button>
      </div>
    </div>
  );
});
