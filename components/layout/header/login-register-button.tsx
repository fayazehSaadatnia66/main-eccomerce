import { Button } from "@/components/ui/button"
import React from "react"
import { SlLogin } from "react-icons/sl"

export default function LoginRegisterButton() {
  return (
    <Button
      startIcon={<SlLogin className="transform rotate-180" />}
      //   size="lg"
      className="h-[40px] w-[134px]"
      variant="outline"
    >
      ورود | ثبت‌نام
    </Button>
  )
}
