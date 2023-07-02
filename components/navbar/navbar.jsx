import Link from "next/link";
import Search from "../search/search";
import HamburgerMenu from "../hamburgermenu/hamburgerMenu";
import { VscAccount } from "react-icons/vsc";

export default function Navbar(props) {
  return (
    <nav className="w-full h-20 flex flex-row items-center justify-between bg-black border-b-lightPurple rounded-b-xl border-b-[3px] border-lightPurple fixed z-50 px-5">
      <h1 className="text-4xl font-bold text-lightPurple m-4 font-mono">
        Scrum
      </h1>
      <div className="hidden mr-2 ns:max-md:w-80 vs:flex justify-center items-center">
        <Search className="h-9 rounded-xl" text="Search here" />
        <Link href={"/auth"}>
          <VscAccount className="w-7 h-7 hidden md:flex text-gray mr-3 ml-2 md:max-lg:mr-auto" />
        </Link>
      </div>
      <HamburgerMenu />
    </nav>
  );
}
