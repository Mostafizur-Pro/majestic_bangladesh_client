import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialProvider({
      name: "credentials",

      credentials: {},
      async authorize(credentials: any) {
        const { email, password } = credentials;

        try {
          const response = await fetch(
            "https://techgear-server.vercel.app/api/v1/auth/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email: email, password: password }),
            }
          );

          const data = await response.json();

          if (data.success) {
            const response = await fetch(
              "https://techgear-server.vercel.app/api/v1/users/"
            );
            const allUsers = await response.json();
            const user = (allUsers.data as any).find(
              (u: any) => u.email === email
            );
            return user;
            // console.log({...user, accessToken : data.data.accessToken});
            // return {...user, accessToken : data.data.accessToken};
          } else {
            throw new Error(data.message || "Authentication failed");
          }
        } catch (error) {
          console.error("Authentication error:", error);
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};
