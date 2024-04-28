import { HTMLAttributes } from "react"

import { cn } from "@/utils/tailwindcss"

type DesktopProps = HTMLAttributes<HTMLDivElement>

const Desktop = ({ children, className, ...rest }: DesktopProps) => (
  <div
    className={cn("mockup-window w-full border bg-base-300", className)}
    {...rest}
  >
    <div className="h-full min-h-[500px] justify-center bg-base-200">
      {children}
    </div>
  </div>
)

export default Desktop
