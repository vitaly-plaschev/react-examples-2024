import Banner from "../components/banner/Banner";
import Bubble from "../components/bubble/Bubble";
import PicturesList from "../components/picturesList/PicturesList";

function Pictures() {
  return (
    <div className="container">
      <h2>Banner sample</h2>
      <Banner text="action text">
        <Bubble />
      </Banner>
      <h2>Pictures list</h2>
      <PicturesList />
    </div>
  );
}

export default Pictures;
