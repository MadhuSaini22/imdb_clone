import React from "react";

function LabelComp({ icon, authName }) {
  return (
    <div>
      <div className="border rounded m-3  w-64 h-8 border-slate-300">
        <div>
          <img className="h-6" src={icon} alt="img"></img>
        </div>
        <div className="">{authName}</div>
      </div>
    </div>
  );
}

export default LabelComp;
