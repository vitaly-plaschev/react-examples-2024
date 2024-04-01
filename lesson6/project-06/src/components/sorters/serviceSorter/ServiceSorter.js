import { useRef } from "react";
import sorterStyle from "./serviceSorter.module.css";

function ServiceSorter({ data, setSortedItems }) {
  const order = useRef(null);

  const handleClick = () => {
    order.current = !order.current;

    const dataCopy = JSON.parse(JSON.stringify(data));
    let sortedItems = dataCopy.sort((a, b) =>
      a.description > b.description ? 1 : b.description > a.description ? -1 : 0
    );

    setSortedItems(order.current ? sortedItems : sortedItems.reverse());
  };

  return (
    <div className={sorterStyle.container}>
      <button onClick={handleClick}>
        {order.current === null ? "Sort" : !!order.current ? "ASC" : "DESC"}
      </button>
    </div>
  );
}

export default ServiceSorter;
