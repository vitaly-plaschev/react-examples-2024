import InfoCard from "../card/InfoCard";
import ServiceSorter from "../../sorters/serviceSorter/ServiceSorter";
import { v4 as uuidv4 } from "uuid";

export default function InfoList({ data, gridStyle, setSortedItems }) {
  return (
    <div>
      {setSortedItems && (
        <ServiceSorter data={data} setSortedItems={setSortedItems} />
      )}
      <div style={gridStyle}>
        {data.map((dataElem) => (
          <InfoCard key={uuidv4()} info={dataElem} />
        ))}
      </div>
    </div>
  );
}
