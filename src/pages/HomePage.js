import React from "react";
import Navbar from "../components/Navbar";
import ImgItem from "../components/ImgItem";
import ItemPost from "../components/ItemPost";

import imageData from "../data/imagesData";

function HomePage() {
  const itemElements = imageData.map((item, index) => {
    return <ImgItem key={index} propsData={item} />;
  });

  return (
    <div>
      <Navbar />
      <h1>HomePage</h1>
      <div className="app-grid">{itemElements}</div>
      {/* <ItemPost /> */}
    </div>
  );
}

export default HomePage;
