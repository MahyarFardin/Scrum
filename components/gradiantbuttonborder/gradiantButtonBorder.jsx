export default function GradiantButtonBorder(props) {
  return (
    <div className="mx-auto flex items-center justify-center">
      <div className="w-full h-auto rounded-full bg-gradient-to-r from-lightPurple to-blue p-1">
        <div className="flex h-full w-24 items-center justify-center rounded-full  py-1 bg-black text-g back">
          <button className="font-semibold text-lg text-center bg-clip-text bg-gradient-to-r from-lightPurple to-blue text-opacity-0">
            {props.text}
          </button>
        </div>
      </div>
    </div>
  );
}
