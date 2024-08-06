
import NextAuth, { AuthError } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "./schemas"
import google from "next-auth/providers/google"
import axios from "axios"

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
        const response = await fetch(
          "http://localhost:8086/api/v1/auth/signin",
          {
            method: "POST",
            body: JSON.stringify({
              screenName: screenName,
              password: password,
              code: code === "undefined" ? null : code
            }),
            redirect: "follow",
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        if (!response.ok) return null
        const res = await response.json()
        console.log(res)
        if (res.error) {
          throw new AuthError(res.message)
        }

        if (res.message?.includes("Confirmation email sent")) {
          throw new AuthError(res.message)
        }

        return {
          email: res.userData.email,
          id: res.userData.id,
          name: res.userData.fullName
        }
        // return res
      }
    })
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") return true
      const response = await fetch(
        `http://localhost:8086/api/v1/users/${user.id}`,
        {
          credentials: "include"
        } // credentials: "include"
      )
      // if (!response.ok) return token
      const existingUser = await response.json()
      if (existingUser.isTwoFactoreEnabled) {
        const twoFactorConfirmation = await axios.get(
          `http://localhost:8086/api/v1/auth/two-factor/confirmation/by-user-id/${existingUser.id}`
        )
        if (!twoFactorConfirmation) return false

        await axios.delete(
          `http://localhost:8086/api/v1/auth/two-factor/delete-confirmation/${twoFactorConfirmation.id}`
        )
      }
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
      const response = await fetch(
        `http://localhost:8086/api/v1/users/${token.sub}`,
        {
          credentials: "include"
        }
      )
      if (!response.ok) return token
      const existingUser = await response.json()
      token.roles = existingUser.roles
      return token
    }
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/error"
  }
})
