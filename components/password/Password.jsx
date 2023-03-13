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
    // <div className="h-auto w-full pr-2 flex flex-row justify-center items-center text-white">
    //   {props.children}
    //   <div className="w-full h-10 border-2 border-white rounded-lg flex justify-center items-center ">
    //     <input
    //       className="h-full w-full px-2 bg-black rounded-md placeholder-white focus:border-black"
    //       type="password"
    //       placeholder="password"
    //     />
    //     <button className="absolute right-9">
    //       <AiOutlineEye
    //         className="w-auto h-8 text-white m-1 rounded-md "
    //         size={25}
    //       />
    //     </button>
    //   </div>
    // </div>
  );
}
