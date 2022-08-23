import React from "react";

function PublicLayout(props) {
  return (
    <>
      <div className="bg-black">{props.children}</div>
    </>
  );
}

export default PublicLayout;
