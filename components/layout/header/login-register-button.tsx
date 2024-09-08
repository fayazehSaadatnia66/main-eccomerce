import { Button } from "@/components/ui/button"
import React from "react"
import { HiOutlineLogin } from "react-icons/hi"

export default function LoginRegisterButton() {
  return (
    <Button
      startIcon={<HiOutlineLogin size={22} />}
      // size="sm"
      className="h-[35px] w-[134px] rounded-lg  text-primary z-10"
      variant="outline"
    >
      ورود | ثبت‌نام
    </Button>
  )
}
