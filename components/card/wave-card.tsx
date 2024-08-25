import React from "react"
import "./wave-card.scss"
import { cn } from "@/lib/utils"
import { FaAngular } from "react-icons/fa"
import { IconType } from "react-icons/lib"

type WaveCardProps = {
  color:
    | "red"
    | "green"
    | "blue"
    | "yellow"
    | "purple"
    | "black"
    | "green"
    | "orange"
  title?: string
  icon?: IconType
}
const WaveCard = ({ color, title, icon: Icon }: WaveCardProps) => {
  return (
    <div
      className={cn("wave-card fast-playing  text-center", color || "purple")}
    >
      <div className="image"></div>

      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>

      <div className="w-full h-full position-absolute justify-around flex py-8 flex-col items-center">
        {/* <FaAngular className="w-20 h-20 z-10" /> */}
        {Icon && <Icon className="w-20 h-20 z-10" />}
        <h5 className="font-medium text-3xl z-10">{title}</h5>
      </div>
    </div>
  )
}

export default WaveCard
