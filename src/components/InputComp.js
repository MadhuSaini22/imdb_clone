import React from "react";

function InputComp(props) {
  return (
    <div>
      
      <label for="" className=" font-bold text-sm">
        {props.labelName}
      </label>
      <input class="w-full text-slate-600 text-sm py-1 focus:border-amber-400 focus:border-2 px-2 border border-gray-400 rounded outline-none " placeholder={`${props.placeholderValue ? props.placeholderValue : ""}`} />
    </div>
  );
}

export default InputComp;
