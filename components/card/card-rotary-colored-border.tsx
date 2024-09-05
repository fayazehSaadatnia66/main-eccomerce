import React from "react"
import { IconType } from "react-icons/lib"
import { cn } from "@/lib/utils"
import "./card-rotary-colored-border.scss"
import { Colors } from "@/types"

type CardRotaryColoredBorderProps = {
  color: Colors
  title?: string
  icon?: IconType
}
const CardRotaryColoredBorder = ({
  color,
  title,
  icon: Icon
}: CardRotaryColoredBorderProps) => {
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

export default CardRotaryColoredBorder
