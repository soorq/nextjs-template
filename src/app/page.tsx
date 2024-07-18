import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { EnvelopeOpenIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default function DashboardPage() {
  return(
    <main className="min-h-[100vh] min-w-[100vw] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">NextJS shadcn/ui demo</h1> 
        <Button asChild>
      <Link href="/dashboard">
      <EnvelopeOpenIcon className="mr-2 h-4 w-4" />
      Go To Dashboard
      </Link>
    </Button>
      </div>
    </main>
  )
}