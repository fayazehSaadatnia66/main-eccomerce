import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import google from "next-auth/providers/google"
import api from "./lib/axios-config"
import { CustomError } from "./lib/custom-error"
import { LoginSchema } from "./schemas"
import { getUserById } from "./services/user-service"

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth
} = NextAuth({
  events: {},
  providers: [
    google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID
    }),
    Credentials({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials)
        if (!validateFields.success) return null

        const { screenName, password, code } = validateFields.data
        const body = {
          screenName: screenName,
          password: password,
          code: code === "undefined" ? null : code
        }
        const res = await api.post("/auth/signin", body).catch((err) => {
          throw new CustomError(err)
        })

        return {
          email: res.data.userData.email,
          id: res.data.userData.id,
          name: res.data.userData.fullName
        }

        // return res
      }
    })
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") return true
      // const response = await fetch(
      //   `http://localhost:8086/api/v1/users/${user.id}`,
      //   {
      //     credentials: "include"
      //   } // credentials: "include"
      // )
      // if (!response.ok) return token
      // const existingUser = await response.json()
      // if (existingUser.isTwoFactoreEnabled) {
      //   const twoFactorConfirmation = await axios.get(
      //     `http://localhost:8086/api/v1/auth/two-factor/confirmation/by-user-id/${existingUser.id}`
      //   )
      //   if (!twoFactorConfirmation) return false

      //   await axios.delete(
      //     `http://localhost:8086/api/v1/auth/two-factor/delete-confirmation/${twoFactorConfirmation.id}`
      //   )
      // }
      return true
    },
    // session is global session use in app with auth()
    session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (token.roles && session.user) {
        session.user.roles = token.roles.map((r) => ({
          id: r.id,
          name: r.name
        }))
      }
      return session
    },
    // token showing in above and showing in the req in middleware
    async jwt({ token }) {
      if (!token.sub) return token
      // const response = await fetch(
      //   `http://localhost:8086/api/v1/users/${token.sub}`,
      //   {
      //     credentials: "include"
      //   }
      // )
      // if (!response.ok) return token
      // const existingUser = await response.json()
      const existingUser = await getUserById(token.sub)
      if (!existingUser) return token
      token.roles = existingUser.roles
      return token
    }
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/error"
  }
})
