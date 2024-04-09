import { useRef } from "react";
import commonTodoForm from "../commonTodoForm.module.css";

const priorityValues = {
  High: 1,
  Medium: 2,
  Low: 3,
};

function SortTodo({ data, onUpdateItems }) {
  const orderTitle = useRef(null);
  const orderPriority = useRef(null);
  const orderDate = useRef(null);

  const handleTitleClick = () => {
    orderTitle.current = !orderTitle.current;

    const dataCopy = JSON.parse(JSON.stringify(data));
    let sortedItems = dataCopy.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );

    onUpdateItems(orderTitle.current ? sortedItems : sortedItems.reverse());
  };

  const handlePriorityClick = () => {
    orderTitle.current = !orderTitle.current;

    const dataCopy = JSON.parse(JSON.stringify(data));
    let sortedItems = dataCopy.sort((a, b) =>
      priorityValues[a.priority] > priorityValues[b.priority]
        ? 1
        : priorityValues[b.priority] > priorityValues[a.priority]
        ? -1
        : 0
    );

    onUpdateItems(orderTitle.current ? sortedItems : sortedItems.reverse());
  };

  const handleDateClick = () => {
    orderTitle.current = !orderTitle.current;

    const dataCopy = JSON.parse(JSON.stringify(data));
    let sortedItems = dataCopy.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    onUpdateItems(orderTitle.current ? sortedItems : sortedItems.reverse());
  };

  return (
    <div className={commonTodoForm.sort_buttons_container}>
      <button className={commonTodoForm.button_pink} onClick={handleTitleClick}>
        {orderTitle.current === null
          ? "Sort by title"
          : !!orderTitle.current
          ? "Sort by title ASC"
          : "Sort by title DESC"}
      </button>
      <button
        className={commonTodoForm.button_pink}
        onClick={handlePriorityClick}
      >
        {orderPriority.current === null
          ? "Sort by priority"
          : !!orderPriority.current
          ? "Sort by priority ASC"
          : "Sort by priority DESC"}
      </button>
      <button className={commonTodoForm.button_pink} onClick={handleDateClick}>
        {orderDate.current === null
          ? "Sort by date"
          : !!orderDate.current
          ? "Sort by date ASC"
          : "Sort by date DESC"}
      </button>
    </div>
  );
}

export default SortTodo;
