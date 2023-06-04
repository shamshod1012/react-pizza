import React from "react";
import ContentLoader from "react-content-loader";

export const MyLoader = (props) => (
  <ContentLoader
    speed={1}
    width={230}
    height={430}
    viewBox="0 0 230 430"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="114" cy="124" r="107" />
    <rect x="9" y="243" rx="0" ry="0" width="208" height="29" />
    <rect x="12" y="306" rx="0" ry="0" width="209" height="72" />
    <rect x="13" y="403" rx="0" ry="0" width="97" height="23" />
    <rect x="128" y="402" rx="0" ry="0" width="88" height="24" />
  </ContentLoader>
);
