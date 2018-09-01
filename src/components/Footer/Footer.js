import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="flex_row">
        <div>
          <h2>Wheelies Inc TM</h2>
        </div>
        <div>
          {/* link to careers page */}
          <h3>We are hiring!</h3>
          {/* link to adoptions */}
          <h3>Adopt a pet near you</h3>
        </div>
      </div>
      <div className="sub">
        <p>
          Wheelies come with a 1 year warranty. Warranty is not valid if used
          with cats.
        </p>
      </div>
    </div>
  );
};
export default Footer;
