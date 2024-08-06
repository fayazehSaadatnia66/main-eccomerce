import * as z from "zod"

export const LoginSchema = z.object({
  screenName: z.string({ message: "ddddddddd" }),
  password: z.string(),
  code:z.optional(z.string())

})
export const RegisterSchema = z.object({
  screenName: z.string({ message: "ddddddddd" }),
  password: z.string().min(6, {
    message: "حداقل 6 کارکتر باید باشد!",
  }),
  name: z.string().min(1, {
    message: "وارد کردن نام اجباری است!",
  }),

})
