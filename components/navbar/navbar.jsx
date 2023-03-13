import Search from "../search/search";
import HamburgerMenu from "../hamburgermenu/hamburgerMenu";
import { VscAccount } from "react-icons/vsc";

export default function Navbar(props) {
  return (
    <div className="w-screen h-20 flex flex-row items-center bg-black border-b-lightPurple border-4 border-hidden rounded-b-xl shadow-md shadow-lightPurple absolute z-50 ">
      <h1 className="text-4xl font-bold text-lightPurple m-4 font-mono">
        Scrum
      </h1>
      <div className="hidden h-12 ns:flex justify-center items-center">
        <div className="flex flex-row items-start mr-auto ml-11">
          <div className="m-auto px-4 text-lg text-white font-medium">Home</div>
          <div className="m-auto px-4 text-lg text-white font-medium">Team</div>
          <div className="m-auto px-4 text-lg text-white font-medium">
            Lorem
          </div>
        </div>
      </div>
      <div className="hidden ml-auto mr-2 sn:max-md:w-80 vs:flex justify-center items-center">
        <Search className="h-9 rounded-xl" text="Search here" />
        <VscAccount className="w-8 h-8  text-gray mr-3 ml-2 md:max-lg:mr-auto" />
      </div>
      <HamburgerMenu/>
    </div>
  );
}
