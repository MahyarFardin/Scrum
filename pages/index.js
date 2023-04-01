import React from "react";
import useAuthentication from "@/components/Hooks/Auth";

function Home() {
  useAuthentication();

  return <div>Redirecting ...</div>;
}
export default Home;
