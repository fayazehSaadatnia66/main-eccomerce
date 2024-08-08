"use client"
import CardWrapper from "@/components/auth//card-wrappper"
import * as z from "zod"
import { ControllerFieldState, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema } from "@/schemas"

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
import { login } from "@/actions/login"
import { useState, useTransition } from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from "@/components/ui/input-otp"
import { LoginUser } from "@/actions/auth"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { FormWarning } from "../form-warning"
import { FaSpinner } from "react-icons/fa"
import { Checkbox } from "../ui/checkbox"

type MessageType = {
  message: string | undefined
  type: "error" | "warning" | "success"
}
const LoginForm = () => {
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState<MessageType>({
    message: "",
    type: "error"
  })
  const [showTwoFactor, setShowTwoFactor] = useState(false)
  // const [success, setSuccess] = useState<string | undefined>("")
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      screenName: "f.saadatnia66@gmail.com",
      password: "123546",
      twoFactor: false
    }
  })
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(values)
        .then((data) => {
          console.log(data)
          const type = (data?.type as any) || "error"
          if (type === "error") {
            setMessage({
              // message: data?.message.split(".")?.[0],
              message: data?.message,
              type
            })
          }
          if (type === "pending") {
            setMessage({
              // message: data?.message.split(".")?.[0],
              message: data?.message,
              type: "warning"
            })
          }
          if (data?.twoFactor) {
            form.setValue("twoFactor", true)
            setShowTwoFactor(true)
          }
          // if (data?.success) {
          //   form.reset()
          //   setSuccess(data.success)
          // }
        })
        .catch((err) => {
          console.log(err)
          setMessage(err.message)
        })
    })
  }
  const renderInputSlot = (
    index: number,
    fieldState: ControllerFieldState,
    field: any
  ) => {
    return (
      <InputOTPSlot
        className={
          fieldState.invalid &&
          (!field.value || field.value?.length < index + 1)
            ? "border-red-500"
            : ""
        }
        key={field.value + index}
        index={index}
      />
    )
  }

  return (
    <CardWrapper
      headerLabel="خوش آمدید"
      backButtonHref="/auth/register"
      backButtonLabel="حساب کاربری ندارید?"
      showSocial
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          // action={LoginUser}
          className="space-y-6"
        >
          <div className="space-y-4 text-end">
            {showTwoFactor && (
              <FormField
                control={form.control}
                name="code"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="mb-3">کد دو عاملی</FormLabel>
                    <FormControl>
                      <InputOTP
                        {...field}
                        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                        maxLength={5}
                        // className="text-end "
                        disabled={isPending}
                      >
                        <InputOTPGroup>
                          {Array(5)
                            .fill(1)
                            .map((_, index) => {
                              return renderInputSlot(index, fieldState, field)
                            })}
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {!showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name="screenName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="float-end mb-3">
                        نام کاربری
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="text-end"
                          {...field}
                          disabled={isPending}
                          placeholder="نام کاربری"
                          type="text"
                          required
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
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            <FormField
              name="twoFactor"
              render={({ field }) => (
                <FormItem hidden>
                  <Checkbox {...field} checked={showTwoFactor} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError
            message={message.type === "error" ? message.message : ""}
          />
          <FormWarning
            message={message.type === "warning" ? message.message : ""}
          />
          <FormSuccess
            message={message.type === "success" ? message.message : ""}
          />
          <Button disabled={isPending} className="w-full" type="submit">
            {isPending && <FaSpinner className="w-4 h-4 mx-2 animate-spin" />}
            {showTwoFactor ? "تایید" : " ورود"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default LoginForm
