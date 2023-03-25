import GradiantButton from "@/components/gradiantbutton/GradiantButton";
import Navbar from "@/components/navbar/navbar";
import Tabs from "@/components/tabs/Tabs";
import { useState } from "react";

function InputWithLable(props) {
  return (
    <div className="w-full h-auto my-9">
      <label>{props.label}</label>
      <input
        className="w-full h-10 mt-2 text-sm bg-black border-b-2 border-gray text-white rounded-md px-2 placeholder:text-gray placeholder:text-sm outline-none"
        name={props.name}
        placeholder={props.text}
      />
    </div>
  );
}
export default function () {
  const [stage, setStage] = useState(0);
  const handleclick = (event)=>{
    event.preventDefault()
    setStage(current => current+1)
  }
  return (
    <div className="w-full h-full bg-black">
      <Navbar />
      <div className="w-full h-full flex flex-row pt-20 bg-black">
        <div className="lg:w-1/5 h-screen fixed hidden lg:flex bg-darkGray pl-3 space-y-3">
          <Tabs />
        </div>
        <div className="lg:ml-[20%] w-full h-full py-12 px-10 text-white text-3xl font-semibold">
          <div className="lg:w-1/2 md:w-2/3 sm:w-3/4 w-full h-full mx-auto px-20">
            {stage === 0 && (
              <div>
                <InputWithLable
                  label="Let's make a new project"
                  text="What its name gonna be?"
                  name="name"
                  type="text"
                />
                <InputWithLable
                  label="Now try to describe it"
                  text="What is it gonna do?"
                  name="description"
                  type="text"
                />
                <GradiantButton click={handleclick} text="Proceed" />
              </div>
            )}
            {stage === 1 && (
              <div>
                <InputWithLable
                  label="When is the deadline?"
                  text="set a date"
                  name="deadline"
                  type="text"
                />
                <InputWithLable
                  label="Add your collegues"
                  text="Who is involved?"
                  name="team"
                  type="text"
                />
                <GradiantButton text="Done"/>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
