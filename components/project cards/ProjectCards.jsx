import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Link from "next/link";
import "react-circular-progressbar/dist/styles.css";
export default function ProjectCards(props) {
  return (
    <Link href={`/project/${props.id}`}>
      <div className="w-full h-72 text-center bg-darkGray rounded-2xl py-10 cursor-pointer hover:scale-105 duration-700">
        <h1 className="text-2xl font-bold uppercase">{props.name}</h1>
        <h1 className="text-xl font-light mt-6">Due date: {props.date}</h1>
        <CircularProgressbar
          className="h-1/2 mt-8"
          value={props.progress}
          max={100}
          text={`${props.progress}%`}
          strokeWidth={10}
          counterClockwise={true}
          background={true}
          styles={buildStyles({
            backgroundColor: "#1a1a1a",
            pathColor: "#855CFF",
            textColor: "#855CFF",
            trailColor: "#1a1a1a",
          })}
        />
      </div>
    </Link>
  );
}
