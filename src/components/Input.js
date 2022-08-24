import React from "react";

function Input({ labelName, idName, typeName, placeholderValue }) {
  return (
    <div>
      <label for="" className=" font-bold text-sm">
        {labelName}
      </label>
      <input
        className="w-full text-slate-600 text-sm py-1 focus:border-orange-600 focus:shadow-input-focus px-2 border border-gray-400 rounded outline-none "
        id={`${idName ? idName : ""}`}
        placeholder={`${placeholderValue ? placeholderValue : ""}`}
        type={`${typeName ? typeName : ""}`}
        // ref={`${refName ? refName : ""}`}
        required
      />
    </div>
  );
}

export default Input;
