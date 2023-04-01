import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function useAuthentication() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      router.push("/auth");
    }
    router.push("/projects");
  }, []);
}
