import Grid from "./grid/Grid";
import gameStyle from "./game.module.css";
import addTodoStyle from "../todos/commonTodoForm.module.css";
import animals from "../../animals.js";
import { useRef, useState } from "react";

function generate() {
  return [...animals, ...animals, ...animals]
    .sort(() => Math.random() - 0.5)
    .slice(0, 9);
}

function Game() {
  const regenerate = useRef(false);
  const [data, setData] = useState(generate());
  const [start, setStart] = useState(false);
  const [word, setWord] = useState();

  const handleStartClick = () => {
    if (regenerate.current) {
      setWord("");
      setData(generate());
      regenerate.current = false;
    }
    setStart(!start);
    setWord(data[Math.floor(Math.random() * data.length)]);
  };

  const handleCheckClick = () => {
    setStart(false);
    regenerate.current = true;
  };

  return (
    <div className={gameStyle.container}>
      <h2 className={gameStyle.center_align}>
        Pick all cards with requested word.
      </h2>
      {word && (
        <h2 className={gameStyle.center_align}>
          <b>Requested word: {word}</b>
        </h2>
      )}
      <Grid data={data} isStart={start} word={!start ? word : ""} />
      <div className={gameStyle.buttons_div}>
        <button
          className={addTodoStyle.button_pink}
          onClick={!start ? handleStartClick : handleCheckClick}
        >
          {!start ? "Start" : "Check"}
        </button>
      </div>
    </div>
  );
}

export default Game;
