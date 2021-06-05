import React from "react";
import "./css/ImgItem.css";

function ImgItem(props) {
  // console.log(props);
  const { propsData, onImageClick } = props;

  return (
    <div className="img-item">
      <img
        src={propsData.thumbnail}
        alt="thumbnailImg"
        onClick={() => onImageClick(propsData)}
      />
      <h4>{propsData.title}</h4>
    </div>
  );
}

export default ImgItem;
