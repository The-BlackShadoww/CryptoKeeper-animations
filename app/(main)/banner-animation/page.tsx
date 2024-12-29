import Image from "next/image";
import React from "react";

const BannerAnimation = () => {
  return (
    <main>
      <div className="w-full h-[50vh] bg-[#171744] banner-section flex items-center justify-center">
        <div className="">
          <Image
            className="scroll-thumb"
            src={"/scroll.png"}
            alt="scroll"
            width={35}
            height={35}
          />
        </div>
      </div>
      <div className="banner-section-blog z-[1] overflow-hidden relative w-full h-[50vh] bg-[#222434] flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white capitalize z-10">
          Here are all the blogs
        </h1>
        <button className="nav-link d-center box-style btn-box p-0 false">
          See All
        </button>
      </div>
    </main>
  );
};

export default BannerAnimation;
