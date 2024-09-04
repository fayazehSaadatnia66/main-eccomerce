import React from "react"
import "./card2.scss"
import { IconType } from "react-icons/lib"
import { cn } from "@/lib/utils"

type Card2Props = {
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
const Card2 = ({ color, title, icon: Icon }: Card2Props) => {
  return (
    <div className={cn("card2", color)}>
      <span className="glass"></span>
      <div className="content flex flex-col justify-between gap-5">
        {Icon && <Icon className="w-20 h-20 z-10" />}
        <span>{title}</span>
      </div>
    </div>
  )
}

export default Card2
