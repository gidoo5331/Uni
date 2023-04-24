import NextAuth from 'next-auth';
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import sendRequest from '../../../lib/sendVerificationRequest';
import EmailProvider from 'next-auth/providers/email';
import SequelizeAdapter from "@next-auth/sequelize-adapter"
import sequelize from "../../../db";
import User from "../../../db/models/user";
    export const authOptions = {
      adapter: SequelizeAdapter(sequelize),
      providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        EmailProvider({
          server: process.env.EMAIL_SERVER,
          from: process.env.EMAIL_FROM,
          sendVerificationRequest({
            identifier: email,
            url,
            provider: { server, from },
          }){
            sendRequest({
              identifier: email,
              url,
              provider: { server, from },
            })
          }
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            // authorization: {
            //   params: {
            //     prompt: "consent",
            //     access_type: "offline",
            //     response_type: "code"
            //   }}
        }),
        ],
        // pages: {
        //     signIn: "/login",
        //     // signOut: "/"
        //     newUser: "/new-user",
        //     },

          secret:  process.env.SECRET,
          callbacks: {},
          jwt: { secret: process.env.SECRET },

          // callbacks: {
          //   async session({ session, token, user }) {
          //     if (!session) return;
          //     const email = session?.user?.email;
          //     const data = await User.findOne({
          //       where: { email: email },
          //     });
          //     session.user.email = data.email;
          //     session.user.name = data.name;
          //     session.user.image = data.image;
          //     session.user.verified = data.verified;
          //     session.user.id = data.id;
          //     return session;
          //   },
          // },
}


export default NextAuth(authOptions)    