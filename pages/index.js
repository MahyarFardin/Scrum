import axios from "axios";
import { useEffect } from "react";

export default function Home(props) {
  return (
    <div>
    </div>
  );
}

export async function getStaticProps(ctx) {
  const currentId = useRouter();

  const data = await axios.get(`http://127.0.0.1:3001/project/list`, {
    headers: {
      Authorization: `Bearer {${process.env.token}}`,
    },
  });


  return {
    props: {
      data: data,
    },
    revalidate: 20,
  };
}