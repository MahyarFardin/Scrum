import { useState } from "react";
import Image from "next/image";
import Input from "@/components/input/Input";
import GradiantButton from "@/components/gradiantbutton/GradiantButton";
import GradiantButtonBorder from "@/components/gradiantbuttonborder/gradiantButtonBorder";
import Password from "@/components/password/Password";
import { FiMail } from "react-icons/fi";
import { BiLockAlt } from "react-icons/bi";
import { MdPersonOutline } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
// Font Bronova
export default function Auth() {
  const [isSigningIn] = useState(false);
  return (
    <div className="overflow-hidden w-screen h-screen bg-black text-white">
      {/* this runs if user wants to sign in */}
      {isSigningIn && (
        <div className="w-full h-full flex flex-row">
          <div className="w-1/2 h-full rounded-r-2xl bg-gradient-to-tr from-LightPurple to-blue">
            <div className="w-auto h-auto text-center py-20">
              <h3 className="text-6xl font-medium">Scrum</h3>
              <h3 className="text-4xl font-semibold my-14">Welcome Back!</h3>
              <Image
                className="mx-auto"
                src="/rocket.png"
                width={350}
                height={350}
                alt="login image"
              />
            </div>
          </div>
          <div className="w-1/2 m-full">
            <div className="text-center text-white py-20 lg:px-14">
              <h3 className="text-6xl font-medium my-7">Sign In</h3>
              <div className="w-auto h-auto my-12 ml-13 mx-6">
                <Input text="E-mail">
                  <FiMail size={25} />
                </Input>
                <Password text="Password" icon="AiOutlineEye">
                  <BiLockAlt size={30} />
                </Password>
              </div>
              <GradiantButton text="Sign in" />
              <h3 className="text-lg my-3 ">Forget Password?</h3>
              <div className="w-5/6 mx-auto flex flex-row justify-center items-center space-x-1">
                <h3 className="my-14">Don't have an account?</h3>
                <GradiantButtonBorder text="Sign up" />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* this runs if user wants to sign up */}
      {!isSigningIn && (
        <div className="w-full h-full flex flex-row">
          <div className="w-1/2 h-full rounded-r-2xl bg-gradient-to-tr from-LightPurple to-blue">
            <div className="w-auto h-auto text-center py-20">
              <h3 className="text-6xl font-medium">Scrum</h3>
              <h3 className="text-4xl font-semibold my-14">Hello, Friend!</h3>
              <Image
                className="mx-auto"
                src="/ astronaut.png"
                width={350}
                height={350}
                alt="login image"
              />
            </div>
          </div>
          <div className="w-1/2 m-full">
            <div className="text-center text-white py-20 lg:px-14">
              <h3 className="text-6xl font-medium my-7">Sign Up</h3>
              <div className="w-auto h-auto my-12 ml-13 mx-6 space-y-5">
                <Input text="Full Name">
                  <MdPersonOutline size={25} />
                </Input>
                <Input text="E-mail">
                  <FiMail size={25} />
                </Input>
                <Input text="Phone Number">
                  <AiOutlinePhone size={25} />
                </Input>
                <Password text="Password">
                  <BiLockAlt size={30} />
                </Password>
              </div>
              <GradiantButton text="Sign up" />
              <div className="w-5/6 mx-auto flex flex-row justify-center items-center space-x-1">
                <h3 className="my-14 mr-1">Already have an account?</h3>
                <GradiantButtonBorder text="Sign up" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
