import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Input from "@/components/input/Input";
import GradiantButton from "@/components/gradiantbutton/GradiantButton";
import { FiMail } from "react-icons/fi";
import { BiLockAlt } from "react-icons/bi";
import { MdPersonOutline } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { useRouter } from "next/router";

export default function Auth() {
  const router = useRouter();
  const [isSigningIn, setIsSigninIn] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    number: 0,
  });

  const handlechange = (event) => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    res = await axios.post("http://127.0.0.1:5000/auth/register", {
      username: user.username,
      email: user.email,
      password: user.password,
      confirm_password: user.confirmpassword,
      mobile: user.number,
    });
    if (res == 200) router.push("/");
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    let body = {
      username: user.email,
      password: user.password,
    };
    body = JSON.stringify(body);
    const url = "http://127.0.0.1:5000/auth/login";
    if (user.password !== user.confirmpassword) setError((current) => !current);
    else {
      // await fetch(url, {
      //     method: "POST",
      //     headers: {
      //         "Content-Type": "application/json",
      //     },
      //     body,
      // })
      //     .then((response) => response.json())
      //     .then((data) => console.log(data))
      //     .catch((error) => console.error(error));

      await axios
        .post(url, body, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="w-full h-full text-white bg-black overflow-y-hidden">
      {/* this runs if user wants to sign in */}
      {isSigningIn && (
        <form
          onSubmit={handleSignIn}
          className="w-full h-screen grid grid-cols-2"
        >
          <div className="w-full h-full rounded-r-2xl bg-gradient-to-tr from-lightPurple to-blue">
            <div className="w-auto h-full text-center py-20">
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
          <div className="w-full h-full bg-black">
            <div className="w-full h-full text-center text-white py-20 lg:px-14">
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
                <Input
                  name="password"
                  type="password"
                  text="Password"
                  change={handlechange}
                >
                  <BiLockAlt size={30} />
                </Input>
              </div>
              <GradiantButton click={handleSignIn} text="Sign in" />
              <h3 className="text-lg my-3 ">Forget Password?</h3>
              <div className="w-5/6 mx-auto flex flex-row justify-center items-center space-x-1">
                <h3 className="my-14">Do not have an account</h3>
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
          className="w-full h-screen grid grid-cols-2"
        >
          <div className="w-full h-full rounded-r-2xl bg-gradient-to-tr from-lightPurple to-blue">
            <div className="w-auto h-full text-center py-20">
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
          <div className="w-full h-full ">
            <div className="w-ull h-full text-center text-white pt-14 lg:px-14">
              <h3 className="text-6xl font-medium my-7">Sign Up</h3>
              <div className="w-auto md:w-72 lg:w-80 h-auto my-10 mx-6 md:mx-auto lg:mx-auto lg:text-lg">
                <Input text="Full Name" name="username" change={handlechange}>
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
              <GradiantButton text="Sign in" />
              <div className="w-5/6 h-auto mt-7 mx-auto flex flex-row justify-center items-center space-x-1">
                <h4 className="my-1 mr-1">Already have an account?</h4>
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
