import { ButtonForHeader } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const MainPage = () => {
    return (
        <section className="text-white">
            <div className="tab:mt-[200px] mt-[96px] grid tab:grid-cols-2 grid-cols-1 tab:gap-0 gap-12">
                <div className="space-y-[36px] tab:text-left tab:block flex flex-col justify-center items-center text-center">
                    <h1 className="">
                        The Future of <br /> Digital Wallets
                        <br /> Starts{" "}
                        <span className="text-primaryColor">Here.</span>
                    </h1>
                    <p className="text-[#eaeaea]/50 text-[18px] leading-[150%]">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        at
                        <br />
                        pharetra nec sed erat non metus suspendisse mus non{" "}
                        <br />
                        lectus vel vitae massa id in in turpis posuere laoreet
                        tortor.
                    </p>
                    <ButtonForHeader title="Download" />
                </div>
                <div className="flex justify-center items-center">
                    <Image
                        src={"/wallet-1.png"}
                        width={668}
                        height={668}
                        alt="walltet-1"
                    />
                </div>
            </div>
        </section>
    );
};

export default MainPage;
