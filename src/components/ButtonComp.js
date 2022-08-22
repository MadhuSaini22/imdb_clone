import React from "react";

function ButtonComp(props) {
  return (
    <div>
      <button
        className={`${props.backColor}  border-gray-400 text-sm w-full rounded border outline-none cursor-pointer h-8 text-slate-900`}
        type="submit"
      >
       {props.label}
      </button>
    </div>
  );
}

export default ButtonComp;
