import React from "react";
import "./Card.css";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import LastCard from "./LastCard";


const Card = ({ color, data }) => {
  return (
    <div className="card" style={{ backgroundColor: "orange" }}>
      <FirstCard {...data} />
      <SecondCard {...data} />
      <LastCard {...data} />
    </div>
  );
};

export default Card;
