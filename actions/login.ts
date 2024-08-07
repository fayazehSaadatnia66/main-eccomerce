"use server"
import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { LoginSchema } from "@/schemas"
import { CustomError } from "@/utils/CustomError"
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
    console.log(error)
    if (isRedirectError(error)) {
      throw error
    }
    if (error instanceof AuthError) {
      const { type, name, cause } = error
      const customError = cause?.err as CustomError
      const title = customError?.title || ""
      const message = customError?.detail || ""
      console.log(customError)

      if (message.includes("Email does not exists")) {
        return {
          message: "نام کاربری یا کلمه عبور نامعتبر است",
          type: "error"
        }
      }

      if (message.includes("2fa code is required")) {
        return {
          message: "کد ارسال شده را وارد نمایید",
          type: "pending",
          twoFactor: true
        }
      }

      if (message.includes("Email not verified")) {
        return {
          message:
            "ایمیل شما تایید نشده است! یک ایمیل تاییدی برای شما ارسال گردید",
          type: "pending"
        }
      }

      if (message.includes("Invalid Code")) {
        return {
          message: "کد وارد شده اشتباه است",
          type: "error"
        }
      }

      if (message.includes("Code expired")) {
        return { message: "کد شما منقضی شده است", type: "error" }
      }

      return { message: "نام‌کاربری/کلمه عبور اشتباه است", type: "error" }
    }
  }

  return { message: "با موفقیت انجام شد", type: "success" }
}
