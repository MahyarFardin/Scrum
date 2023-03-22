import ProjectCards from "../project cards/ProjectCards";
export default function () {
  return (
    <div className="w-full h-full">
      <h1 className="font-semibold uppercase">your projects</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
        <div className="w-full h-72 flex items-center text-center bg-gradient-to-t from-lightPurple to-darkGray rounded-2xl">
          <h1 className="mx-auto">+ New Project</h1>
        </div>
      </div>
    </div>
  );
}
