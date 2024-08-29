import Image from "next/image"
import React from "react"
import logo from "/public/images/logo.png"

export const MainLogo = () => {
  return (
    <div>
      <Image style={{color:"red"}} width={150} alt="code market" src={logo} className="text-red"/>
    </div>
  )
}
