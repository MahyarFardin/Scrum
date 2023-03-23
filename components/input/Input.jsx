import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { RxEyeClosed } from "react-icons/rx";

export default function Input(props) {
  const [isPassword, setIsPassword] = useState(
    props.type == "password" ? true : false
  );
  console.log(isPassword);
  const handleclick = (event) => {
    event.preventDefault();
    setIsPassword((current) => !current);
  };
  return (
    <div className="h-auto w-full my-4 flex flex-row justify-center items-center text-white relative">
      {props.children}
      <input
        className="h-12 w-full px-4 bg-black border-[2px] border-b-white rounded-md ml-5 placeholder-white z-0"
        type={isPassword ? props.type : "text"}
        placeholder={props.text}
        onChange={props.change}
        name={props.name}
      />
      {props.type == "password" && (
        <button
          className="absolute right-[10px] top-2.5 z-10"
          onClick={handleclick}
        >
          {isPassword == true ? (
            <AiOutlineEye size={30} />
          ) : (
            <RxEyeClosed size={25} />
          )}
        </button>
      )}
    </div>
  );
}
