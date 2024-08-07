import * as React from "react"

import { cn } from "@/lib/utils"
import { IconType } from "react-icons/lib"
import { IconProps } from "@radix-ui/react-icons/dist/types"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, ...props }, ref) => {
    const StartIcon = startIcon
    const EndIcon = endIcon

    return (
      <div className="w-full relative">
        {StartIcon && (
          <div className="absolute right-2.5 top-1/2 transform -translate-y-1/2">
            {StartIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            startIcon ? "ps-9" : "",
            endIcon ? "pe-9" : "",
            className
          )}
          ref={ref}
          {...props}
        />
        {EndIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {/* <EndIcon className="text-muted-foreground" size={18} /> */}
            {EndIcon}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
