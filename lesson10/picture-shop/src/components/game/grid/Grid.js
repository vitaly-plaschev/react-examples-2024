import Card from "./Card";
import gridStyle from "./grid.module.css";

function Grid({ data, isStart, word }) {
  return (
    <div
      className={
        isStart
          ? `${gridStyle.grid} ${gridStyle.isStart}`
          : `${gridStyle.grid} ${gridStyle.notStart}`
      }
    >
      {data.map((item, i) => (
        <Card key={`${item}${i}`} item={item} word={word} />
      ))}
    </div>
  );
}

export default Grid;
