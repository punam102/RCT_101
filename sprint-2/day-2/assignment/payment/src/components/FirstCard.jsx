import React from "react";
const FirstCard = ({ date, logo }) => {
  return (
    <>
      <div className="upperCard">
        <p>28/10/2020</p>
        <h1>Amazon Gift Pay</h1>
        <img src="amazon.jpg" alt="logo" />
        {/* <h2>Dekstop - Mobile</h2> */}
      </div>
    </>
  );
};

export default FirstCard;
