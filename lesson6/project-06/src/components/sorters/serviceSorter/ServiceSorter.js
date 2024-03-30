import { useState } from "react";
import sorterStyle from "./serviceSorter.module.css";

function ServiceSorter({ data, setSortedItems }) {
  const [order, setOrder] = useState(true);

  const handleClick = () => {
    setOrder(!order);
    
    const dataCopy = JSON.parse(JSON.stringify(data));
    let sortedItems = dataCopy.sort((a, b) =>
      a.description > b.description ? 1 : b.description > a.description ? -1 : 0
    );

    setSortedItems(order ? sortedItems : sortedItems.reverse());    
  };

  return (
    <div className={sorterStyle.container}>
      <button onClick={handleClick}>
        {order === null ? "Sort" : !!order ? "ASC" : "DESC"}
      </button>
    </div>
  );
}

export default ServiceSorter;
