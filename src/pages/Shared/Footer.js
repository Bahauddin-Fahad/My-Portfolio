import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="glass bg-secondary text-white bg-contain h-full">
      <footer class="footer footer-center p-10 ">
        <div>
          <h2 className="text-lg">
            Copyright © {year} - All right reserved by{" "}
            <span className="text-primary font-bold">Bahauddin Fahad</span>
          </h2>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
