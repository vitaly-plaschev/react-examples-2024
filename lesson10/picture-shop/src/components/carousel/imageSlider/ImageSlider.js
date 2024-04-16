import { useEffect, useState } from "react";
import sliderStyle from "./slider.module.css";

function ImageSlider({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const index = JSON.parse(localStorage.getItem("defaultSlliderImage")) || 0;
    setImageIndex(index);
  }, []);

  const handleNextClick = () => {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  };

  const handleCenterClick = () => {
    localStorage.setItem("defaultSlliderImage", JSON.stringify(imageIndex));
  };

  const handlePrevClick = () => {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  };

  return (
    <div className={sliderStyle.imageSlider}>
      <img src={imageUrls[imageIndex]} className={sliderStyle.image} alt="" />
      <button
        className={sliderStyle.sideButton}
        style={{ left: 0 }}
        onClick={handlePrevClick}
      >
        {"<"}
      </button>
      <button onClick={handleCenterClick}>Set default image</button>
      <button
        className={sliderStyle.sideButton}
        style={{ right: 0 }}
        onClick={handleNextClick}
      >
        {">"}
      </button>
    </div>
  );
}

export default ImageSlider;
