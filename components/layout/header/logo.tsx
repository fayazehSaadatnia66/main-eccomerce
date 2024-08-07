import Image from "next/image"
import React from "react"
import logo from "/public/images/logo.png"

export const MainLogo = () => {
  return (
    <div>
      <Image width={150} alt="code market" src={logo} />
    </div>
  )
}
