import axios from "axios";
import Link from "next/link";
import ProjectCards from "../project cards/ProjectCards";
export default function (props) {
  return (
    <div className="w-full h-full">
      <h1 className="font-semibold uppercase">your projects</h1>
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {/* {props.data.map((project, idx) => (
          <ProjectCards
            key={idx}
            name={project.name}
            progress={project.progress}
            date={project.date}
          />
        ))} */}
        <ProjectCards name={"Project 1"} date={"2022/04/02"} progress={30} />
        <div className="w-full h-72 flex items-center text-center bg-gradient-to-t from-lightPurple to-darkGray rounded-2xl">
          <h1 className="mx-auto">
            <Link href={"/projects/new-project"}>+ New Project</Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const data = await axios.get("http://127.0.0.1:3000/project/list", {
//     headers: {
//       Authorization: `Bearer {${process.env.token}}`,
//     },
//   });

//   return {
//     props: { data },
//   };
// }
