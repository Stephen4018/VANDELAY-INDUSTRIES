import React from "react";
import { FaHome } from "react-icons/fa";

const AsideComp = () => {
  return (
    <div className="aside-section">
      <div className="aside-section-inner">
        <div className="logo">
          <img src="logos.png" alt="" />
        </div>
        <div className="line"></div>
        <section className="aside-inner-top">
          <div className="dashboard">
            <div className="dashboard-text-icon">
              <FaHome />
            </div>
            <p>Dashboard</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AsideComp;
