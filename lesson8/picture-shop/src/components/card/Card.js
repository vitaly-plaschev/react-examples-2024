import React from "react";

function Card({ pictureData }) {
  if (!pictureData.enable) return null;
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#D8E6EF",
        borderRadius: "5px",
        color: "#44046",
      }}
    >
      <h2>{pictureData.title}</h2>
      <div>
        <img src={pictureData.path} alt={pictureData.title} />
      </div>
      <p>
        {pictureData.price > 100000
          ? "Need to clarify price"
          : pictureData.price}
      </p>
      <button>Add to Cart</button>      
    </div>
  );
}

export default Card;
