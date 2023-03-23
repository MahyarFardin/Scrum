export default function (props) {
  return (
    <div className="w-full h-72 text-center bg-darkGray rounded-2xl py-10 cursor-pointer">
      <h1 className="text-2xl font-bold uppercase">{props.name}</h1>
      <h1 className="text-xl font-light mt-6">Due date: {props.date}</h1>
      <progress className="h-2 rounded progress" value={props.progress} max={100}>{props.progress}</progress>
    </div>
  );
}
