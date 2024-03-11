import pictures from "../../pictures";
import Card from "../card/Card";

function PicturesList() {
  const picturesCard = pictures.map((pic) => <Card pictureData={pic} />);
  return <div>{picturesCard}</div>;
}

export default PicturesList;
