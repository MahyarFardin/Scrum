import { AiOutlineEye } from "react-icons/ai";

export default function Input(props) {
  return (
    <div className="h-auto w-full my-8 flex flex-row justify-center items-center text-white">
      {props.children}
      <input
        className="h-12 w-full px-4 bg-black border-[2px] border-b-white rounded-md ml-5 placeholder-white"
        type={props.type ? props.type : "text"}
        placeholder={props.text}
        onChange={props.change}
        name={props.name}
      />
      {props.type == "password" && (
        <button>
          <AiOutlineEye className="w-auto h-6 text-white mr-1 rounded-md " />
        </button>
      )}
    </div>
  );
}
