"use server"

import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { LoginSchema } from "@/schemas"
import { appUrl } from "@/utils/Utils"
import { AuthError } from "next-auth"
import { isRedirectError } from "next/dist/client/components/redirect"
import { CgPassword } from "react-icons/cg"
import * as z from "zod"

export const LoginUser = async (values: any) => {
  const validatedFields = LoginSchema.safeParse(values)
  console.log(validatedFields)

  // if (!validatedFields.success) {
  //   return {
  //     errors: validatedFields.error.flatten().fieldErrors,
  //   }
  // }
  if(!validatedFields.success){
    return {error:"فیلدها نامعتبر هستند!"}
  } 
  return{
    success:"Email sent!"
  }
  // try {
  //   signIn("credentials", {
  //     redirect: true,
  //     redirectTo: DEFAULT_LOGIN_REDIRECT,
  //     screenName: values.get("screenName"),
  //     password: values.get("password"),
  //   })
  // } catch (error) {
  //   if (error instanceof Error) {
  //     const { type, cause } = error as AuthError
  //     console.log("xxxxxxxxxxx")
  //     switch (type) {
  //       case "CredentialsSignin":
  //         return "Invalid credentials."
  //       case "CallbackRouteError":
  //         return cause?.err?.toString()
  //       default:
  //         return "Something went wrong."
  //     }
  //   }
  //   throw error
  // }
}
