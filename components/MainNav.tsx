import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";

const MainNav = () => {
    return (
        <header className="border w-full h-[92px] my-1 flex justify-between items-center gap-2 text-[#ffffff]">
            <div>
                <Image
                    src={"/logo.png"}
                    width={168}
                    height={168}
                    alt="Logo"
                ></Image>
            </div>
            <div className="flex-1 flex justify-end space-x-5">
                <nav className="">
                    <ul className="flex space-x-5 text-[18px]">
                        <li>
                            <Link href={"#"}>Home</Link>
                        </li>
                        <li>
                            <Link href={"#"}>About</Link>
                        </li>
                        <li className="flex items-center justify-center">
                            <Link href={"#"}>Pages</Link>
                            <RiArrowDownSLine />
                        </li>
                        <li>
                            <Link href={"#"}>Cart(0)</Link>
                        </li>
                    </ul>
                </nav>
                <button>button</button>
            </div>
        </header>
    );
};

export default MainNav;
