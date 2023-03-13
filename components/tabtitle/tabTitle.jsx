import { RiSettingsLine } from "react-icons/ri";

export default function TabTitle(props) {
  return (
    <div className="flex justify-start items-center">
      {props.children}
      <button className="text-gray text-2xl">{props.text}</button>
    </div>
  );
}
