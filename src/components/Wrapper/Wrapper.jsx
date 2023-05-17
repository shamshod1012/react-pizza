import React from "react";

import "./Wrapper.css";

export const Wrapper = (props) => {
  const { children } = props;
  return <div className="wrapper">{children}</div>;
};
