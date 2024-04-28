import Link from "next/link"

import { Description, Header, Title } from "@/components/common-layout"
import Desktop from "@/components/desktop"

export default function Home() {
  return (
    <div className="bg-gradient-to-tr from-lime-200 via-emerald-50 to-teal-200">
      <main className="mx-auto min-h-screen max-w-screen-xl space-y-12 p-20">
        <Header>
          <Title>Archive</Title>
          <Description>Space for implementing CSS animations</Description>
        </Header>

        <Link className="block" href={"/animation"}>
          <Desktop></Desktop>
        </Link>
      </main>
    </div>
  )
}
