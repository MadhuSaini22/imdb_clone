import React from "react";

function Heading({heading}) {
  return (
    <div>
      <h2 className="text-2xl   font-bold lg:text-3xl my-3 text-yellow-400">{heading}</h2>
    </div>
  );
}

export default Heading;
