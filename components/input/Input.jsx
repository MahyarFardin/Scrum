export default function Input(props) {
  return (
    <div className="h-auto w-full flex flex-row justify-center items-center text-white">
      {props.children}
      <input
        className="h-10 w-full px-2 bg-black border-[2px] border-b-white rounded-md m-2 ml-1 placeholder-white"
        type={props.type ? props.type : "text"}
        placeholder={props.text}
        onChange={props.change}
        name={props.name}
      />
    </div>
  );
}
