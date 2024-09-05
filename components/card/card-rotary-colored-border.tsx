import React from "react"
import { IconType } from "react-icons/lib"
import { cn } from "@/lib/utils"
import "./card-rotary-colored-border.scss"
import { Colors } from "@/types"

type CardRotaryColoredBorderProps = {
  color: Colors
  title?: string
  icon?: IconType
  iconSize?: number
  width?: number
  wrapperClassName?: string
}
const CardRotaryColoredBorder = ({
  color,
  title,
  icon: Icon,
  width,
  iconSize,
  wrapperClassName,
}: CardRotaryColoredBorderProps) => {
  return (
    <div
      className={cn("card2", color, wrapperClassName)}
      style={{ width: width || 190 }}
    >
      <span className="glass"></span>
      <div className="content flex flex-col justify-between gap-5">
        {Icon && <Icon size={iconSize || 55} />}
        <span>{title}</span>
      </div>
    </div>
  )
}

export default CardRotaryColoredBorder
