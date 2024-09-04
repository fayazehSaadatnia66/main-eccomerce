import React from "react"
import "./card1.scss"
import { IconType } from "react-icons/lib"
import { cn } from "@/lib/utils"

type Card1Props = {
  color:
    | string
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
const Card1 = ({ color, title, icon: Icon }: Card1Props) => {
  return (
    <div className={cn("card1", color)}>
      {Icon && <Icon className="w-20 h-20 z-10" />}
      <div className="heading">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default Card1
