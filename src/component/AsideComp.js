import React from "react";
import { FaHome } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import { TiSpanner } from "react-icons/ti";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosRocket } from "react-icons/io";
// import { Link } from "react-router-dom";

const AsideComp = () => {
  return (
    <div className="aside-section">
      <div className="aside-section-inner">
        <div className="logo">
          <img src="logos.png" alt="" />
        </div>
        <section className="aside-inner-top">
          <div className="dashboard">
            <div className="dashboard-text-icon">
              <FaHome />
            </div>
            <p className="dashboard-text hide">Dashboard</p>
          </div>
          {/* /* end of dashboard text */}
          <div className=" icon-container tables">
            <div className="icon">
              <img src="chart.png" alt="" />
            </div>
            <p className="text hide">Tables</p>
          </div>
          {/* end of tables */}
          <div className=" icon-container billing">
            <div className="icon">
              <BsFillCreditCardFill />
            </div>
            <p className="text hide">Billing</p>
          </div>
          {/* end of billing */}
          <div className=" icon-container rtl">
            <div className="icon">
              <TiSpanner />
            </div>
            <p className="text hide">RTL</p>
          </div>
        </section>
        <h3>ACCOUNT PAGES</h3>
        <section className="aside-inner-bottom">
          <div className=" icon-container profile">
            <div className="icon">
              <BsFillPersonFill />
            </div>
            <p className="text hide">Profile</p>
          </div>
          <div className=" icon-container profile">
            <div className="icon">
              <img src="document.png" alt="" />
            </div>
            <p className="text hide">Sign In</p>
          </div>
          <div className=" icon-container profile">
            <div className="icon">
              <IoIosRocket />
            </div>
            <p className="text hide">Sign Up</p>
          </div>
        </section>
        <div className="aside-footer">
          <div className="aside-footer-inner">
            <div className="question">
              <div className="question-inner">
                <span>?</span>
              </div>
            </div>
            <div className="question-text">
              <p className="bold">Need Help?</p>
              <p className="light">Please check our docs</p>
            </div>
            <div className="documentation">
              <p>Documentation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideComp;
