import React from "react";
import "./css/ItemPost.css";
import imageItem from "../image/001.jpg";

function ItemPost() {
  return (
    <div className="item-post">
      <div className="item-post-bg" />
      <div className="item-post-content">
        <img src={imageItem} />
        <h4>PICTURE</h4>
      </div>
    </div>
  );
}

export default ItemPost;
