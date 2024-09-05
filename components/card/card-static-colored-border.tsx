import React, { HTMLProps } from "react"
import { IconType } from "react-icons/lib"
import { cn } from "@/lib/utils"
import { Colors } from "@/types"
import "./card-static-colored-border.scss"

type CardStaticColoredBorderProps = {
  color: Colors
  title?: string
  icon?: IconType
  iconSize?: number
  width?: number
  wrapperClassName?: string
}
const CardStaticColoredBorder = ({
  color,
  title,
  icon: Icon,
  width,
  iconSize,
  wrapperClassName
}: CardStaticColoredBorderProps) => {
  return (
    <div
      className={cn("card1", color, wrapperClassName)}
      style={{ width: width || 190 }}
    >
      {Icon && (
        <Icon
          size={iconSize || 55}
          // className="w-20 h-20 z-10"
        />
      )}
      <div className="heading">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default CardStaticColoredBorder
