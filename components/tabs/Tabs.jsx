import Link from "next/link";
import { RiSettingsLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { VscListSelection } from "react-icons/vsc";

function TabTitle(props) {
  return (
    <Link href={props.link}>
      <button className="flex justify-start items-center text-gray text-xl hover:text-lightPurple my-8">
        {props.children}
        {props.text}
      </button>
    </Link>
  );
}

export default function Tabs() {
  const style = "text-xl my-auto mx-4 ";
  return (
    <div className="h-full">
      <TabTitle text="Dashboard" link="#">
        <VscListSelection className={style} size={30} />
      </TabTitle>
      <TabTitle text="Projects" link="/projects">
        <HiOutlineDocumentText className={style} size={30} />
      </TabTitle>
      <TabTitle text="Tools" link="#">
        <RiSettingsLine className={style} size={30} />
      </TabTitle>
      <TabTitle text="Activity" link="#">
        <AiOutlineLineChart className={style} size={30} />
      </TabTitle>
      <TabTitle text="Calendar" link="#">
        <MdOutlineCalendarMonth className={style} size={30} />
      </TabTitle>
      <TabTitle text="Setting" link="#">
        <AiOutlineSetting className={style} size={30} />
      </TabTitle>
    </div>
  );
}
