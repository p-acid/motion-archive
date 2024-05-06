import { HTMLAttributes, ReactNode } from "react"

import { cn } from "@/utils/tailwindcss"

type AnimationSloganProps = HTMLAttributes<HTMLDivElement>

const AnimationSlogan = ({
  children,
  className,
  ...rest
}: AnimationSloganProps) => {
  return (
    <div className={cn("flex flex-col items-center", className)} {...rest}>
      {SLOGANS.map(({ text, animation: { rise, expand } }, index) => (
        <div key={index} className="relative w-fit">
          <div className="relative z-10 overflow-hidden">
            <div
              className={cn(
                "text-6xl font-extrabold leading-[1.2] tracking-tighter text-zinc-50",
                rise
              )}
            >
              {text}
            </div>
          </div>

          <div
            className={cn(
              "absolute left-[-2%] top-[60%] z-0 h-[40%] w-[105%] origin-left bg-sky-900",
              expand
            )}
          />
        </div>
      ))}
    </div>
  )
}

export default AnimationSlogan

const SLOGANS: { text: ReactNode; animation: Record<string, string> }[] = [
  {
    text: "당신이 경험하고 기대했던,",
    animation: {
      rise: "animate-[1s_rise_0.1s_both]",
      expand: "animate-[1s_expand-x_1.8s_both]",
    },
  },
  {
    text: "그 이상의 애니메이션",
    animation: {
      rise: "animate-[1s_rise_0.5s_both]",
      expand: "animate-[1s_expand-x_2.2s_both]",
    },
  },
  {
    text: (
      <>
        <span className="bg-gradient-to-r from-teal-300 via-sky-300 to-blue-300 bg-clip-text text-transparent">
          {"Tailwindcss ༄ "}
        </span>
        X
        <span className="bg-gradient-to-r from-green-300 via-yellow-300 to-orange-300 bg-clip-text text-transparent">
          {" daisyUI "}
        </span>
        🌼
      </>
    ),
    animation: {
      rise: "animate-[1s_rise_1s_both]",
      expand: "animate-[1s_expand-x_2.6s_both]",
    },
  },
]
