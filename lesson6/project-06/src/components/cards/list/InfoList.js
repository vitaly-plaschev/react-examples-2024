import InfoCard from "../card/InfoCard";
import ServiceSorter from "../../sorters/serviceSorter/ServiceSorter";

export default function InfoList({ data, gridStyle, setSortedItems }) {
  return (
    <div>
      {setSortedItems && (
        <ServiceSorter data={data} setSortedItems={setSortedItems} />
      )}
      <div style={gridStyle}>
        {data.map((dataElem, index) => (
          <InfoCard key={`${dataElem.type}${index}`} info={dataElem} />
        ))}
      </div>
    </div>
  );
}
