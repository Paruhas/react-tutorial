import React from "react";
import "./css/ItemPost.css";

function ItemPost(props) {
  const { propsData, onOutsideClick } = props;

  return (
    <div className="item-post">
      <div className="item-post-bg" onClick={onOutsideClick} />
      <div className="item-post-content">
        <img src={propsData.fullImg} alt="fullImg" />
        <h4>{propsData.title}</h4>
      </div>
    </div>
  );
}

export default ItemPost;
