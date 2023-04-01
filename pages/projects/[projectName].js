import Navbar from "@/components/navbar/navbar";
import Tabs from "@/components/tabs/Tabs";
import Project from "@/components/Project/Project";
import { useRouter } from "next/router";
import axios from "axios";

export default function ProjectName(props) {
  return (
    <div className="w-full h-full bg-black">
      <Navbar />
      <div className="w-full h-full flex flex-row pt-20">
        <div className="lg:w-1/5 h-screen fixed hidden lg:flex bg-darkGray pl-3 space-y-3">
          <Tabs />
        </div>
        <div className="lg:ml-[20%] w-full h-full py-12 px-10 text-white text-3xl font-semibold">
          {props && <Project />}
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const data = await axios.get("http://127.0.0.1:3001/project/list", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer {${process.env.token}}`,
    },
  });

  return {
    paths: [data],
    fallback: true, // can also be true or 'blocking'
  };
}

export async function getStaticProps(ctx) {
  const currentId = useRouter();

  const data = await axios.get(
    `http://127.0.0.1:3001/project/${currentId.query.projectName}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer {${process.env.token}}`,
      },
    }
  );

  return {
    props: {
      data: data,
    },
    revalidate: 20,
  };
}
