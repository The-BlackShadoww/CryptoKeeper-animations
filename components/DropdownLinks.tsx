import Link from "next/link";

const DropdownLinks = () => {
    return (
        <nav className="absolute right-[5%] max-w-[720px] w-full h-auto text-[#ffffff] bg-[#ffffff]/[2%] border border-[#2a2a2a]/50 p-12 rounded-[18px] space-y-10 backdrop-blur-sm shadow-md">
            <div>
                <h6 className="mb-5">Main Pages</h6>
                <div className="grid grid-cols-3 gap-[68px] text-[18px] text-[#eaeaea]/50">
                    <ul className="">
                        <Link href={"#"}>
                            <li className="mb-2 hover:text-[#eaeaea] transition-all ease-linear">
                                Home
                            </li>
                        </Link>
                        <Link href={"#"}>
                            <li className="mb-2 hover:text-[#eaeaea] transition-all ease-linear">
                                About
                            </li>
                        </Link>
                        <Link href={"#"}>
                            <li className="mb-2 hover:text-[#eaeaea] transition-all ease-linear">
                                Features
                            </li>
                        </Link>
                        <Link href={"#"}>
                            <li className="mb-2 hover:text-[#eaeaea] transition-all ease-linear">
                                Integrations
                            </li>
                        </Link>
                        <Link href={"#"}>
                            <li className="mb-2 hover:text-[#eaeaea] transition-all ease-linear">
                                Integrations Single
                            </li>
                        </Link>
                    </ul>
                    <ul className="">
                        <Link href={"#"}>
                            <li className="mb-2 hover:text-[#eaeaea] transition-all ease-linear">
                                Careers
                            </li>
                        </Link>
                        <Link href={"#"}>
                            <li className="mb-2 hover:text-[#eaeaea] transition-all ease-linear">
                                Pricing
                            </li>
                        </Link>
                        <Link href={"#"}>
                            <li className="mb-2 hover:text-[#eaeaea] transition-all ease-linear">
                                Pricing Single
                            </li>
                        </Link>
                        <Link href={"#"}>
                            <li className="mb-2 hover:text-[#eaeaea] transition-all ease-linear">
                                Contact
                            </li>
                        </Link>
                    </ul>
                    <ul className="">
                        <Link href={"#"}>
                            <li className="mb-2 hover:text-[#eaeaea] transition-all ease-linear">
                                Blog
                            </li>
                        </Link>
                        <Link href={"#"}>
                            <li className="mb-2 hover:text-[#eaeaea] transition-all ease-linear">
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
            {/* Utility Pages */}
            <div>
                <h6 className="mb-5">Utility Pages</h6>
                <div className="grid grid-cols-3 gap-[68px] text-[18px] text-[#eaeaea]/50">
                    <ul className="">
                        <Link href={"#"}>
                            <li className="mb-2 hover:text-[#eaeaea] transition-all ease-linear">
                                Sign In
                            </li>
                        </Link>
                        <Link href={"#"}>
                            <li className="mb-2 hover:text-[#eaeaea] transition-all ease-linear">
                                Sign
                            </li>
                        </Link>
                    </ul>
                    <ul>
                        <Link href={"#"}>
                            <li className="mb-2 hover:text-[#eaeaea] transition-all ease-linear">
                                Careers
                            </li>
                        </Link>
                    </ul>
                    {/* this ul is hidden */}
                    <ul className="invisible">
                        <Link href={"#"}>
                            <li className="mb-2 hover:text-[#eaeaea] transition-all ease-linear">
                                Blog
                            </li>
                        </Link>
                        <Link href={"#"}>
                            <li className="mb-2 hover:text-[#eaeaea] transition-all ease-linear">
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default DropdownLinks;
