import React from "react";
import "./css/ItemPost.css";
import imageItem from "../image/001.jpg";

function ItemPost(props) {
  const { propsData, onOutsideClick } = props;

  return (
    <div className="item-post">
      <div className="item-post-bg" onClick={onOutsideClick} />
      <div className="item-post-content">
        <img src={propsData.thumbnail} />
        <h4>{propsData.title}</h4>
      </div>
    </div>
  );
}

export default ItemPost;
