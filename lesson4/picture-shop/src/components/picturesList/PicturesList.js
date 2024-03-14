import usePictures from "../../hooks/usePictures";
import Card from "../card/Card";

function PicturesList() {
  const {pictures, error, isLoading} = usePictures();
  if (error) return <h2>Error at pictures loading</h2>;
  if (isLoading) return <h2>Loading...</h2>;  
  if (!pictures || pictures.length === 0) return <h2>No data to display</h2>;
  const picturesCard = pictures.map((pic) => <Card pictureData={pic} />);
  return <div>{picturesCard}</div>;
}

export default PicturesList;
