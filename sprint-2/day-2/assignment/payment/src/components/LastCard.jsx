import React from "react";

const LastCard = ({ subheading }) => {
  return (
    <div className="lowCard">
        <h2>Dekstop - Mobile</h2>
        {/* <h2>Dekstop - Mobile</h2> */}

      <p>{subheading}</p>
      <i>&rarr;</i>
    </div>
  );
};

export default LastCard;
