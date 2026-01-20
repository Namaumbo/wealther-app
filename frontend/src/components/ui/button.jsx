import * as React from "react"
import { cn } from "@/lib/utils"

const buttonVariants = {
  variant: {
    default: "bg-neutral-900 text-neutral-50 hover:bg-neutral-800",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-neutral-300 bg-transparent hover:bg-neutral-100",
    secondary: "bg-neutral-200 text-neutral-900 hover:bg-neutral-300",
    ghost: "hover:bg-neutral-100",
    link: "text-neutral-900 underline-offset-4 hover:underline",
  },
  size: {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  },
}

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variantClasses = buttonVariants.variant[variant] || buttonVariants.variant.default
    const sizeClasses = buttonVariants.size[size] || buttonVariants.size.default
    
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variantClasses,
          sizeClasses,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
