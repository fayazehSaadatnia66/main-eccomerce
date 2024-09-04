import React from "react"
import "./card-inner-circle.scss"
import { IconType } from "react-icons/lib"
import { cn } from "@/lib/utils"

type Card3Props = {
  color:
    | string
    | "red"
    | "red-pale"
    | "green"
    | "blue"
    | "yellow"
    | "yellow-pale"
    | "purple"
    | "black"
    | "green"
    | "orange"
  title?: string
  icon?: IconType
}
const CardInnerCircle = ({ color, title, icon: Icon }: Card3Props) => {
  return (
    <div
      className={cn("card-inner-circle shadow-lg colorfull", color || "yellow")}
    >
      <div className="overlay"></div>
      <div className="circle">
        {Icon && <Icon className="w-20 h-20 z-10" />}
      </div>
      <p className="mt-3">{title}</p>
    </div>
  )
}

export default CardInnerCircle
