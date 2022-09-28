import React from "react";

function Button({ varient, disabledName, label }) {
  // Main Button component 
  return (
    <div>
      <button className={`${varient}`} type="submit" disabled={disabledName}>
        {label}
      </button>
    </div>
  );
}

export default Button;
