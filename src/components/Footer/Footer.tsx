import React from "react";
import FooterShape from "./FooterShape";

const Footer: React.FC = () => {
  return (
    <footer
      className="footer"
    >
      <div className="relative">
        <div className="absolute left-1/2 top-[250px] md:top-[200px] z-20 -translate-x-1/2 -translate-y-1/2 min-w-[300px]">
          <h1 className="font-bold text-black text-5xl md:text-7xl text-center mb-10">
            Apply to join our <br /> private beta
          </h1>
          <span className="text-lg font-semibold text-black">
            Available soon on all major devices.
          </span>
        </div>
        <FooterShape></FooterShape>
      </div>

      <div className="container-small g-position-relative h-[55vh]"></div>
    </footer>
  );
};

export default Footer;
