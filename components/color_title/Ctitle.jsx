export default function Ctitle(props) {
  return (
    <div className="w-fit h-4 m-10 rounded-full">
      <h1 className="title text-4xl text-center text-white dot-pattern">
        <div className="h-[18px] px-3 font-bold rounded-full bg-gradient-to-r from-LightPurple to-blue flex flex-row justify-center items-center">
          {props.text}
        </div>
      </h1>
    </div>
  );
}
