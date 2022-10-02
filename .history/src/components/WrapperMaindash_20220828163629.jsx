import React from "react";

function WrapperMaindash({ title, children }) {
  return (
    <div className="wrapperMaindash">
      <h1 className="heading-text--large">{title}</h1>
      {children}
    </div>
  );
}

export default WrapperMaindash;
