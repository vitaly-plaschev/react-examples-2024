import img1 from "./img1.png";
import bannerStyle from "./banner.module.css";

export default function Banner() {
  return (
    <figure className={bannerStyle.container}>
      <img className={bannerStyle.picture} src={img1} alt="action text" />
      <figcaption className={bannerStyle.caption}>Image 1</figcaption>
    </figure>
  );
}
