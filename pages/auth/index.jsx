import { useState } from "react";
import Image from "next/image";
import Input from "@/components/input/Input";
import GradiantButton from "@/components/gradiantbutton/GradiantButton";
import { FiMail } from "react-icons/fi";
import { BiLockAlt } from "react-icons/bi";
import { MdPersonOutline } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";

export default function Auth() {
  const [isSigningIn, setIsSigninIn] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
    number: 0,
  });

  const handlechange = (event) => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSignIn = (event) => {
    event.preventDefault();
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    console.log("this is a test");
    if (user.password !== user.confirmpassword) setError((current) => !current);
  };
  return (
    <div className="w-full h-full bg-black text-white">
      {/* this runs if user wants to sign in */}
      {isSigningIn && (
        <form
          onSubmit={handleSignIn}
          className="w-full h-full grid grid-cols-2"
        >
          <div className="w-full h-full rounded-r-2xl bg-gradient-to-tr from-lightPurple to-blue">
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
          <div className="w-full m-full">
            <div className="text-center text-white py-20 lg:px-14">
              <h3 className="text-6xl font-medium my-7">Sign In</h3>
              <div className="w-auto h-auto mt-24 mx-20">
                <Input
                  text="E-mail"
                  type="email"
                  name="email"
                  change={handlechange}
                >
                  <FiMail size={30} />
                </Input>
                <Input type="password" text="Password" change={handlechange}>
                  <BiLockAlt size={30} />
                </Input>
              </div>
              <GradiantButton click={handleSignIn} text="Sign in" />
              <h3 className="text-lg my-3 ">Forget Password?</h3>
              <div className="w-5/6 mx-auto flex flex-row justify-center items-center space-x-1">
                <h3 className="my-14">Don't have an account?</h3>
                <button
                  className="border-2 py-1 px-8 rounded-full"
                  onClick={() => setIsSigninIn((current) => !current)}
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
      {/* this runs if user wants to sign up */}
      {!isSigningIn && (
        <form
          onSubmit={handleSignUp}
          className="w-full h-full grid grid-cols-2"
        >
          <div className="w-full h-full rounded-r-2xl bg-gradient-to-tr from-lightPurple to-blue">
            <div className="w-auto h-auto text-center py-20">
              <h3 className="text-6xl font-medium">Scrum</h3>
              <h3 className="text-4xl font-semibold my-14">Hello, Friend!</h3>
              <Image
                className="mx-auto"
                src="/astronaut.png"
                width={350}
                height={350}
                alt="login image"
              />
            </div>
          </div>
          <div className="w-full m-full">
            <div className="text-center text-white pt-20 lg:px-14">
              <h3 className="text-6xl font-medium my-7">Sign Up</h3>
              <div className="w-auto md:w-72 lg:w-80 h-auto my-10 mx-6 md:mx-auto lg:mx-auto lg:text-lg">
                <Input text="Full Name" name="fullname" change={handlechange}>
                  <MdPersonOutline size={30} />
                </Input>
                <Input
                  text="E-mail"
                  type="email"
                  name="email"
                  change={handlechange}
                >
                  <FiMail size={30} />
                </Input>
                <Input
                  text="Number"
                  type="number"
                  name="number"
                  change={handlechange}
                >
                  <FiMail size={30} />
                </Input>
                <Input text="Password" name="password" change={handlechange}>
                  <AiOutlinePhone size={30} />
                </Input>
                <Input
                  type="password"
                  text="Confirm password"
                  name="confirmpassword"
                  change={handlechange}
                >
                  <BiLockAlt size={30} />
                </Input>
                {error && (
                  <h3 className="text-white">Password does not match</h3>
                )}
              </div>
              <GradiantButton text="Sign up" />
              <div className="w-5/6 h-auto mt-7 mx-auto flex flex-row justify-center items-center space-x-1">
                <h4 className="my-8 mr-1">Already have an account?</h4>
                <button
                  className="border-2 py-1 px-8 rounded-full"
                  onClick={() => setIsSigninIn((current) => !current)}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
