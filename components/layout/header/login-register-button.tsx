import { Button } from "@/components/ui/button"
import React from "react"
import { SlLogin } from "react-icons/sl"

export default function LoginRegisterButton() {
  return (
    <Button
      startIcon={<SlLogin className="transform rotate-180" color="#581c87" />}
      //   size="lg"
      className="gggggggggggggggggggggg h-[40px] w-[134px] bg-white text-purple-900 "
      variant="outline"
    >
      ورود | ثبت‌نام
    </Button>
  )
}
