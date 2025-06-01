import React from "react";

const ProductCard = ({ imageUrl, title, description, price }) => {
  return (
    <div className="card-wrapper">
      <div className="title-wrapper">
        <p className="title">{title}</p>
        <p className="price">{`₹ ${price}`}</p>
      </div>
      <div className="img-wrapper">
        <img src={imageUrl} alt={title} height={250}  />
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

export default ProductCard;
