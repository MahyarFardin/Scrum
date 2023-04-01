import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import ProjectCards from "../project cards/ProjectCards";
export default function Projects(props) {
  console.log(Cookies.get());
  return (
    <div className="w-full h-full">
      <h1 className="font-semibold uppercase">your projects</h1>
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {/* {props &&
          props.map((project) => (
            <ProjectCards
              key={project.id}
              name={project.name}
              progress={project.progress}
              date={project.date}
              id={project.id}
            />
          ))} */}
        <div className="w-full h-72 flex items-center text-center bg-gradient-to-t from-lightPurple to-darkGray rounded-2xl">
          <h1 className="mx-auto">
            <Link href={"/projects/new-project"}>+ New Project</Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const token = Cookies.get("token");
  let data = await fetch("http://127.0.0.1:5000/project/list", {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  data = JSON.stringify(data);

  return {
    props: { data },
  };
}
