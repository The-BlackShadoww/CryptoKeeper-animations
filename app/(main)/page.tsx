import { pages } from "@/constant";
import Link from "next/link";

const MainPage = () => {
  return (
    <section className="text-white">
      <div className="max-w-[560px] bg-[#ffffff]/[2%] mx-auto border border-white/20 rounded-lg mt-[15vh] p-6">
        <h1 className="text-[36px] font-bold pb-4 mb-4 border-b border-white/20 text-white/50">
          Animations
        </h1>
        <ul className="space-y-2">
          {pages.map((page) => (
            <li key={page?.title} className="flex gap-x-3">
              <Link
                href={page?.url ?? ""}
                className="text-white/50 hover:text-blue-700 transition-all ease-in-out duration-150 capitalize"
              >
                {page?.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MainPage;
