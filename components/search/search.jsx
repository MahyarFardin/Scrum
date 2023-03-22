import { FiSearch } from "react-icons/fi";

export default function Search(props) {
  return (
    <div className="w-72 h-11 max-w-md ns:mx-3 border-2 border-gray rounded-lg flex justify-center items-center ">
      <input
        className="h-full w-full px-2 bg-black rounded-lg placeholder-gray"
        type="text"
        placeholder={props.text}
      />
      <button>
        <FiSearch className="w-auto h-8 bg-lightPurple text-lightGray p-1 m-1 rounded-md "/>
      </button>
    </div>
  );
}
