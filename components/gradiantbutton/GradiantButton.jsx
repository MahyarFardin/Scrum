export default function GradiantButton(props) {
  return (
    <div className="w-full text-center">
      <button
        onClick={props.click}
        className="w-1/2 h-12 py-1 font-bold text-3xl rounded-full mx-auto  text-white bg-gradient-to-r from-lightPurple to-blue text-center"
      >
        {props.text}
      </button>
    </div>
  );
}
