import React from "react";
import AsideComp from "../component/AsideComp";
import HeaderComp from "../component/HeaderComp";

const FrontLayout = (props) => {
  return (
    <div className="frontlayout">
      <div className="aside-container">
        <AsideComp />
      </div>
      <div className="header-content-container">
        <div className="header">
          <HeaderComp />
        </div>
        <div className="main-content">{props.children}</div>
      </div>
    </div>
  );
};

export default FrontLayout;
