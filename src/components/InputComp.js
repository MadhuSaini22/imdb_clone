import React from "react";

function InputComp(props) {
  return (
    <div>
      <label for="" className=" font-bold text-sm">
        {props.labelName}
      </label>
      <input
        className="w-full text-slate-600 text-sm py-1 focus:border-orange-600 focus:shadow-input-focus px-2 border border-gray-400 rounded outline-none "
        id={`${props.idName ? props.idName : ""}`}
        placeholder={`${props.placeholderValue ? props.placeholderValue : ""}`}
        type={`${props.typeName ? props.typeName : ""}`}
        // ref={`${props.refName ? props.refName : ""}`}
        required
      />
    </div>
  );
}

export default InputComp;
