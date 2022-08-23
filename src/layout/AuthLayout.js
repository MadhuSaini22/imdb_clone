import React from "react";

function AuthLayout(props) {
  return (
    <div>
      
        <div className="bg-white">{props.children}</div>
    </div>
  );
}

export default AuthLayout;
