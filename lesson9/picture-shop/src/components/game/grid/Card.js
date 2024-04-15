import { useRef } from "react";
import gridStyle from "./grid.module.css";

function Card({ item, word }) {
  const clickCount = useRef(0);
  if (!word) clickCount.current = 0;
  return (
    <div
      className={
        !word
          ? `${gridStyle["grid-item"]}`
          : clickCount.current > 0
          ? item === word
            ? `${gridStyle["grid-item"]} ${gridStyle.isMatch}`
            : `${gridStyle["grid-item"]} ${gridStyle.notMatch}`
          : `${gridStyle["grid-item"]}`
      }
      onClick={() => clickCount.current++}
    >
      {item}
    </div>
  );
}

export default Card;
