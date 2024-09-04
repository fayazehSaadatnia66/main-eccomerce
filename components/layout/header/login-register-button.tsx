import { Button } from "@/components/ui/button"
import React from "react"
import { HiOutlineLogin } from "react-icons/hi"

export default function LoginRegisterButton() {
  return (
        <Button
      startIcon={<HiOutlineLogin size={22} color="#9333ea" />}
      //   size="lg"
      className=" h-[40px] w-[134px] rounded-xl text-purple-600 bg-white z-10"
      variant="outline"
    >
      ورود | ثبت‌نام
    </Button>

  )
}
