import Link from "next/link";
import Search from "../search/search";
import HamburgerMenu from "../hamburgermenu/hamburgerMenu";
import { VscAccount } from "react-icons/vsc";

export default function Navbar(props) {
  return (
    <nav className="w-screen h-20 flex flex-row items-center bg-black border-b-lightPurple rounded-b-xl border-b-[3px] border-lightPurple absolute z-50 px-5">
      <h1 className="text-4xl font-bold text-lightPurple m-4 font-mono">
        Scrum
      </h1>
      <div className="mx-auto hidden h-12 ns:flex justify-center items-center">
        <div className="flex flex-row items-start mr-auto ml-11">
          <Link href={"#"} className="m-auto px-4 text-lg font-bold text-white">
            Home
          </Link>
          <Link href={"#"} className="m-auto px-4 text-lg font-bold text-white">
            Team
          </Link>
        </div>
      </div>
      <div className="hidden ml-auto mr-2 sn:max-md:w-80 vs:flex justify-center items-center">
        <Search className="h-9 rounded-xl" text="Search here" />
        <Link href={'#'}>
          <VscAccount className="w-8 h-8  text-gray mr-3 ml-2 md:max-lg:mr-auto" />
        </Link>
      </div>
      <HamburgerMenu />
    </nav>
  );
}
