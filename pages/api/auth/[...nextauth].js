import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: { username, password },
      authorize(credentials, req) {
        const { username, password } = credentials;
        return {
          username,
          password,
          redirect: false,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth",
    singUp: "/auth",
  },
  callbacks: {
    jwt(params) {
      // update token
      if (params.user?.role) {
        params.token.role = params.user.role;
      }
      // return final_token
      return params.token;
    },
  },
};
export default NextAuth(authOptions);
