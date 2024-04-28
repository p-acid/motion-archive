import { HTMLAttributes } from "react"

import { cn } from "@/utils/tailwindcss"

type HeaderProps = HTMLAttributes<HTMLHeadElement>

export const Header = ({ children, className, ...rest }: HeaderProps) => {
  return (
    <header className={cn("space-y-2", className)} {...rest}>
      {children}
    </header>
  )
}

type TitleProps = HTMLAttributes<HTMLHeadingElement>

export const Title = ({ children, className, ...rest }: TitleProps) => {
  return (
    <h1
      className={cn(
        "text-4xl font-extrabold tracking-tighter text-zinc-800",
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  )
}

type DescriptionProps = HTMLAttributes<HTMLHeadingElement>

export const Description = ({
  children,
  className,
  ...rest
}: DescriptionProps) => {
  return (
    <p
      className={cn(
        "text-xl tracking-tight font-light text-zinc-700",
        className
      )}
      {...rest}
    >
      {children}
    </p>
  )
}
