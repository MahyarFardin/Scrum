import { AiOutlineEye } from "react-icons/ai";

export default function Password(props) {
  return (
    <div className="h-auto w-full flex flex-row justify-center items-center text-white">
      {props.children}
      <label className="w-full relative text-white h-auto pr-2">
        <input
          className="form-input h-10 w-full border-[2px] border-b-white rounded-md bg-black px-2 placeholder-white"
          type="password"
          placeholder={props.text}
        />
        <AiOutlineEye className="pointer-events-auto w-auto h-8 absolute top-1/2 transform -translate-y-1/2 right-4"/>
      </label>
    </div>
  );
}
