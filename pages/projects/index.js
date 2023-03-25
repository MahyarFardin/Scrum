import Navbar from "@/components/navbar/navbar";
import Tabs from "@/components/tabs/Tabs";
import Projects from "@/components/projects/Projects";

export default function ProjectsPage() {
  return (
    <div className="w-full h-full bg-black">
      <Navbar />
      <div className="w-full h-full flex flex-row pt-20">
        <div className="lg:w-1/5 h-screen fixed hidden lg:flex bg-darkGray pl-3 space-y-3">
          <Tabs />
        </div>
        <div className="lg:ml-[20%] w-full h-full py-12 px-10 text-white text-3xl font-semibold">
          <Projects />
        </div>
      </div>
    </div>
  );
}
