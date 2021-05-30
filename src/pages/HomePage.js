import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ImgItem from "../components/ImgItem";
import ItemPost from "../components/ItemPost";

import imageData from "../data/imagesData";
import AppSearch from "../components/AppSearch";

function HomePage() {
  const [selectedImageItem, setSelectedImageItem] = useState(null);
  const [searchText, setSearchText] = useState("");

  function onImageOpenClick(imgClick) {
    setSelectedImageItem(imgClick);
  }

  function onImageCloseClick() {
    setSelectedImageItem(null);
  }

  // const filterImageData = imageData.filter((item, index) => {
  //   return item.title.includes(searchText);
  // });
  // const itemElements = filterImageData.map((item, index) => {
  //   return (
  //     <ImgItem key={index} propsData={item} onImageClick={onImageOpenClick} />
  //   );
  // });

  // filter + map in 1-Fn
  const itemElements = imageData
    .filter((item, index) => {
      return item.title.includes(searchText);
    })
    .map((item, index) => {
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
      <section className="app-section">
        <div className="app-container">
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">{itemElements}</div>
        </div>
      </section>
      {itemPost}
    </div>
  );
}

export default HomePage;
