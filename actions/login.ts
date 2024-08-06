"use server"
import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { LoginSchema } from "@/schemas"
import { AuthError } from "next-auth"
import { isRedirectError } from "next/dist/client/components/redirect"
import * as z from "zod"

type LoginResponse = {
  message: string
  type: "error" | "pending" | "success"
  twoFactor?: boolean
}
export const login = async (
  values: z.infer<typeof LoginSchema>
): Promise<LoginResponse> => {
  const validateFields = LoginSchema.safeParse(values)
  if (validateFields.error)
    return { message: "فیلد های ورودی نامعتبر است", type: "error" }

  const { screenName, password, code } = validateFields.data
  const email = screenName

  try {
    await signIn("credentials", {
      screenName,
      code: code,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
      redirect: true
    })
  } catch (error) {
    if (isRedirectError(error)) {
      throw error
    }
    if (error instanceof AuthError) {
      const { type, cause, message } = error
      console.log(type, cause)
      console.log(message)
      if (type === "CallbackRouteError") {
        return { message: "ورودی نامعتبر", type: "error" }
      }
      if (message.includes("Email not verified")) {
        return {
          message:
            "ایمیل شما تایید نشده است! یک ایمیل تاییدی برای شما ارسال گردید",
          type: "pending"
        }
      }

      if (message.includes("Confirmation email sent")) {
        return {
          message: "لطفا کد ارسال شده را وارد نمایید",
          type: "pending",
          twoFactor: true
        }
      }

      if (message.includes("Invalid Code")) {
        return {
          message: "کد وارد شده اشتباه است",
          type: "error"
        }
      }
      // if (message.includes(""))
      return { message: error.message, type: "error" }
    }

    return { message: "Invalid credentials", type: "error" }
  }

  return { message: "با موفقیت انجام شد", type: "success" }
}
