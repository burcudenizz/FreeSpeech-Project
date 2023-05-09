import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="mainpageContainer">
      <div className="footerback">
        <div className="footer">
          <div className="footerCenter">
            <div className="footerContent">
              <Link to="/signup">
                <button className="footerButton">Sign Up</button>
                <br />
              </Link>
              <div className="login">
                <h2 className="account">Do you already have an account? 👀</h2>
                <Link to="/login">
                  <button className="footerButton">Log In</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
