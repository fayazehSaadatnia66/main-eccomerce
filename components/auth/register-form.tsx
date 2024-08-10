"use client"
import CardWrapper from "@/components/auth//card-wrappper"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterSchema } from "@/schemas"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"
import { register } from "@/actions/register"
import { useState, useTransition } from "react"
const RegisterForm = () => {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      // email: "",
      password: "",
      name: ""
    }
  })
  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("")
    setSuccess("")
    startTransition(() => {
      register(values).then((data) => {
        setError(data.error)
        setSuccess(data.success)
      })
    })
  }
  return (
    <CardWrapper
      headerLabel="یک حساب کاربری ایجاد کنید"
      backButtonHref="/auth/login"
      backButtonLabel="از قبلاً یک حساب کاربری دارید"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="float-end mb-3">
                    نام و نام خانوادگی
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-end"
                      {...field}
                      disabled={isPending}
                      placeholder="فیاضه سعادت نیا"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="screenName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="float-end mb-3">نام کاربری</FormLabel>
                  <FormControl>
                    <Input
                      className="text-end"
                      {...field}
                      disabled={isPending}
                      placeholder="f.saadatnia66@gmail.com"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="float-end mb-3">رمز عبور</FormLabel>
                  <FormControl>
                    <Input
                      className="text-end"
                      {...field}
                      disabled={isPending}
                      placeholder="******"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* <FormError message="اعتبار شما به اتمام رسیده است!" /> */}
          <FormError message={error} />
          {/* <FormSuccess message="ایمیل ارسال شد!" /> */}
          <FormSuccess message={success} />
          <Button disabled={isPending} className="w-full" type="submit">
            ذخیره
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default RegisterForm
