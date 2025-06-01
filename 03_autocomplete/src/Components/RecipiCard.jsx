import React from "react";

const RecipiCard = ({ name, image, rating, mealType }) => {
  return (
    <div className="recipi-card">
      <div className="card-header">
        <p className="title">{name}</p>
        <p>{rating}</p>
      </div>
      <div className="image-wrapper">
        <img src={image} alt={name} />
      </div>
      <div>
        {mealType.map((item, index) => (
          <p key={item}>
            {item}
            {index !== mealType.length - 1 && ","}
          </p>
        ))}
      </div>
    </div>
  );
};

export default RecipiCard;
