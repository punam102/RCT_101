import React from "react";

const RestaurentCard = ({
  category,
  total_votes,
  total_reviews,
  total_cost,
  payment_methods,
  url,
  rating,
  name,
}) => {
  const { card, cash, upi } = payment_methods;

  return (
    <div className="rcard">
      <div className="upC">
        <img src={url} alt={url} />
        <br/>
        <div className="detail">
          <h2>{name}</h2>
          <br/>
          <p className="text">{category}</p>
          <br/>
          <p className="text">{`Cost ₹${total_cost} for one`}</p>
          
          <p>Min ₹50 Up to 30 min </p>
          
          <p>
            Accepts
            {card && cash && upi
              ? " all payments"
              : cash && card
              ? " cash & card payments only"
              : cash
              ? " cash payments only"
              : card
              ? " card payments only"
              : " upi payments only"}
          </p>
        </div>
        <div className="rcard">
          <h3>{rating}</h3>
          <br/>
          <p>{total_votes} votes</p>
          <br/>
          <p>{total_reviews} reviews</p>
        </div>
      </div>
      <div className="Card">
    
        <button>Order online</button>
      </div>
    </div>
  );
};

export default RestaurentCard;
