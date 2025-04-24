"use client";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const AnimatedFooter: React.FC = () => {
  return (
    <div className="w-screen h-screen hidden md:flex bg-yellow  flex-col none-trigger"  >
      <div className="w-screen h-[650px] -mb-8">

        <Helmet >
          <script src="/script/box-2d.js" />
          <script src="/script/gravity.js" />
        </Helmet>
        <iframe
          src="/script/index.html"
          className="h-[660px] w-screen -mt-10 overflow-hidden"
          scrolling="no"
          frameBorder="0"
        />

      </div>

      <div className="w-screen overflow-hidden h-[260px]  flex justify-center items-center ">
        <p className="text-[40px] md:text-[169px] black-stroke text-center font-gasoek">
          GET IN TOUCH!
        </p>
      </div>
    </div>
  );
};

export default AnimatedFooter;
