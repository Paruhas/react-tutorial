import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ImgItem from "../components/ImgItem";
import ItemPost from "../components/ItemPost";

import imageData from "../data/imagesData";

function HomePage() {
  const [selectedImageItem, setSelectedImageItem] = useState(null);

  function onImageOpenClick(imgClick) {
    setSelectedImageItem(imgClick);
  }

  function onImageCloseClick() {
    setSelectedImageItem(null);
  }

  const itemElements = imageData.map((item, index) => {
    return (
      <ImgItem key={index} propsData={item} onImageClick={onImageOpenClick} />
    );
  });

  let itemPost = null;
  if (!!selectedImageItem) {
    itemPost = (
      <ItemPost
        propsData={selectedImageItem}
        onOutsideClick={onImageCloseClick}
      />
    );
  }

  return (
    <div>
      <Navbar />
      <h1>HomePage</h1>
      <div className="app-grid">{itemElements}</div>
      {itemPost}
    </div>
  );
}

export default HomePage;
