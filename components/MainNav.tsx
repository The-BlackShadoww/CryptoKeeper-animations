import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import { ButtonForHeader } from "./ui/button";
import DropdownLinks from "./DropdownLinks";

const MainNav = () => {
    return (
        <>
            <header className=" w-full h-[96px] my-1  flex justify-between items-center gap-2 text-[#ffffff]">
                <div>
                    <Link href={"/"}>
                        <Image
                            src={"/logo.png"}
                            width={168}
                            height={168}
                            alt="Logo"
                        ></Image>
                    </Link>
                </div>
                <div className="flex-1 flex justify-end items-center space-x-6">
                    <nav className="">
                        <ul className="flex space-x-6 text-[18px]">
                            <li>
                                <Link href={"#"}>Home</Link>
                            </li>
                            <li>
                                <Link href={"#"}>About</Link>
                            </li>
                            <li className="flex items-center justify-center">
                                <Link href={"#"}>Pages</Link>
                                <RiArrowDownSLine size={26} />
                            </li>
                            <li>
                                <Link href={"#"}>Cart(0)</Link>
                            </li>
                        </ul>
                    </nav>
                    <ButtonForHeader title="Download App" />
                </div>
            </header>
            {/* <DropdownLinks /> */}
        </>
    );
};

export default MainNav;
