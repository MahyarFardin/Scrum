import Link from "next/link";
import { RiSettingsLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { VscListSelection } from "react-icons/vsc";

function TabTitle(props) {
  return (
    <Link href={"#"}>
      <button className="flex justify-start items-center text-gray text-xl hover:text-lightPurple my-8">
        {props.children}
        {props.text}
      </button>
    </Link>
  );
}

export default function Tabs() {
  const style = "text-xl my-auto mx-4";
  return (
    <div className="h-full">
      <TabTitle text="Dashboard">
        <VscListSelection className={style} size={30} />
      </TabTitle>
      <TabTitle text="Projects">
        <HiOutlineDocumentText className={style} size={30} />
      </TabTitle>
      <TabTitle text="Tools">
        <RiSettingsLine className={style} size={30} />
      </TabTitle>
      <TabTitle text="Activity">
        <AiOutlineLineChart className={style} size={30} />
      </TabTitle>
      <TabTitle text="Calendar">
        <MdOutlineCalendarMonth className={style} size={30} />
      </TabTitle>
      <TabTitle text="Setting">
        <AiOutlineSetting className={style} size={30} />
      </TabTitle>
    </div>
  );
}
