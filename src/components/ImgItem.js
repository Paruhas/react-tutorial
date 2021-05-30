import React from "react";
import "./css/ImgItem.css";
import imageItem from "../image/001.jpg";

function ImgItem(props) {
  // console.log(props);
  const { propsData } = props;

  return (
    <div className="img-item">
      <img src={propsData.thumbnail} />
      <h4>{propsData.title}</h4>
    </div>
  );
}

export default ImgItem;
