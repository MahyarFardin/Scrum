import Navbar from "@/components/navbar/navbar";
import Tabs from "@/components/tabs/Tabs";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black">
      <Navbar />
      <div className="flex flex-row pt-20 bg-black">
        <div className="w-1/3 h-screen bg-darkGray  pl-3 space-y-3 md:w-1/4">
          <Tabs/>
        </div>
        <div className="py-12 px-10 text-white text-3xl font-semibold">Your Projects</div>
      </div>
    </div>
  );
}
