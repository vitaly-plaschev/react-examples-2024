import img1 from "./img1.png";
import { capitalize } from "../../hooks";
import bannerStyle from "./banner.module.css";

export default function Banner({ text, children }) {
  return (
    <figure className={bannerStyle.container}>
      {children}
      <img className={bannerStyle.picture} src={img1} alt={capitalize(text)} />
      <figcaption className={bannerStyle.caption}>
        {capitalize(text)}
      </figcaption>
    </figure>
  );
}
