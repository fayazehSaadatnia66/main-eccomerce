import Image from "next/image"
import React from "react"
import logo from "/public/images/logo.png"

export const MainLogo = () => {
  return (
    <div className="text-lg bold text-white z-10">
      CODE MARKET
      {/* <Image style={{color:"red"}} width={150} alt="code market" src={logo} className="filter invert brightness-0"/> */}
    </div>
  )
}
