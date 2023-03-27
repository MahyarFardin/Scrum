import GradiantButton from "../gradiantbutton/GradiantButton";

function Section(props) {
  return (
    <div>
      <h1 className="w-full">{props.title}</h1>
      <ul>
        {props.data.map((task, idx) => {
          return (
            <li key={idx} className={"m-4"}>
              <Link href="#">
                <div className="w-full">
                  <h1>{task.title}</h1>
                  <div className="flex flex-row">
                    {task.team.map(<Image src={member.image} />)}
                  </div>
                  <p>{task.description}</p>
                  <p>Due date: {task.date}</p>
                  <p>{task.comment.len()} comments</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default function projectPage(props) {
  return (
    <div className="w-full h-full ">
      <div className="w-full flex flex-row items-center">
        <div className="w-3/5">
          <h1>{"Project 1"}</h1>
        </div>
        <div className="w-2/5 ">
          <GradiantButton text={"create task +"} />
        </div>
        <div className="">
          <Section data={props.todo} title={"ToDo"} />
        </div>
      </div>
    </div>
  );
}
