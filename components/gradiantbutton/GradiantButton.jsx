export default function GradiantButton(props) {
  return (
    <div className="w-1/2 h-11 py-1 font-bold text-3xl rounded-full m-auto text-white bg-gradient-to-r from-lightPurple to-blue">
      <button>{props.text}</button>
    </div>
  );
}
