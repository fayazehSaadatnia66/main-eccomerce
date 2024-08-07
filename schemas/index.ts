import * as z from "zod"

export const LoginSchema = z
  .object({
    screenName: z.string(),
    password: z.string(),
    twoFactor: z.boolean().optional(),
    code: z
      .string()
      .min(5, {
        message: ""
      })
      .optional()
  })
  // for conditional required code
  .refine(
    (data) => {
      return (
        !data.twoFactor ||
        (data.twoFactor && data.code && data.code.length === 5)
      )
    },
    {
      path: ["code"],
      message: ""
    }
  )
export const RegisterSchema = z.object({
  screenName: z.string({ message: "ddddddddd" }),
  password: z.string().min(6, {
    message: "حداقل 6 کارکتر باید باشد!"
  }),
  name: z.string().min(1, {
    message: "وارد کردن نام اجباری است!"
  })
})
