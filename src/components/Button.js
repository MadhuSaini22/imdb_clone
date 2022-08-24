import React from "react";
// import { btnvarient } from "../staticValues";
// export const btnvarient = {
//   primary: "bg-yellowLight  text-4xl",

// };
function Button({ varient, disabledName, label }) {
  return (
    <div>
      <button className={`${varient}`} type="submit" disabled={disabledName}>
        {label}
      </button>
    </div>
  );
}

export default Button;
