import { AiOutlineEye } from "react-icons/ai";

export default function Input(props) {
  const type = props.type ? props.type : "text";
  return (
    <div className="h-auto w-full flex flex-row justify-center items-center text-white">
      {props.children}
      {type === "password" ? (
        <div className="w-full h-auto ns:mx-3 border-2 border-white rounded-md flex justify-center items-center ml-3 mr-2">
          <input
            className="h-full w-full px-2 py-[0.125rem] bg-black rounded-lg placeholder-white"
            type="text"
            placeholder={props.text}
          />
          <button>
            <AiOutlineEye className="w-auto h-6 text-white mr-1 rounded-md " />
          </button>
        </div>
      ) : (
        <input
          className="h-auto w-full ml-3 px-2 py-[0.125rem] bg-black border-2 border-white rounded-md mx-2 placeholder-white"
          type={type}
          placeholder={props.text}
        />
      )}
    </div>
  );
}
