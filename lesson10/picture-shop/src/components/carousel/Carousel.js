import carouselStyle from "./carousel.module.css";
import images from "../../images.js";
import ImageSlider from "./imageSlider/ImageSlider";

function Carousel() {
  return (
    <div className={carouselStyle.container}>
      <div className={carouselStyle.slider}>
        <ImageSlider imageUrls={images} />
      </div>
    </div>
  );
}

export default Carousel;
