import Navbar from "@/components/navbar/navbar";
import TabTitle from "@/components/tabtitle/tabTitle";
import { RiSettingsLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { VscListSelection } from "react-icons/vsc";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black">
      <Navbar />
      <div className="w-2/5 h-full bg-darkGray pt-24 pl-3 space-y-3 md:w-1/4">
        <div>
          <TabTitle text="Dashboard">
            <VscListSelection className="text-gray text-xl my-5 ml-3 mr-5" />
          </TabTitle>
          <TabTitle text="Projects">
            <HiOutlineDocumentText className="text-gray text-xl my-5 ml-3 mr-5" />
          </TabTitle>
          <TabTitle text="Tools">
            <RiSettingsLine className="text-gray text-xl my-5 ml-3 mr-5" />
          </TabTitle>
          <TabTitle text="Activity">
            <AiOutlineLineChart className="text-gray text-xl my-5 ml-3 mr-5" />
          </TabTitle>
          <TabTitle text="Calendar">
            <MdOutlineCalendarMonth className="text-gray text-xl my-5 ml-3 mr-5" />
          </TabTitle>
          <TabTitle text="Project Setting">
            <AiOutlineSetting className="text-gray text-xl my-5 ml-3 mr-5" />
          </TabTitle>
        </div>
      </div>
    </div>
  );
}
