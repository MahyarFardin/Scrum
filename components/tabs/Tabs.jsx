import Link from "next/link";
import { RiSettingsLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { VscListSelection } from "react-icons/vsc";

function TabTitle(props) {
  return (
    <Link href={"#"} className="flex justify-start items-center">
      {props.children}
      <button className="text-gray text-xl">{props.text}</button>
    </Link>
  );
}

export default function Tabs() {
  return (
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
  );
}
