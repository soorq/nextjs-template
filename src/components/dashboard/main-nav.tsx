import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      <Link
        href="/authentication"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Authentication
      </Link>
      <Link
        href="/cards"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Cards
      </Link>
      <Link
        href="/forms"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Froms
      </Link>
      <Link
        href="/mail"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Mail
      </Link>
      <Link
        href="/music"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Music
      </Link>
      <Link
        href="/playground"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Playground
      </Link>
      <Link
        href="/tasks"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Tasks
      </Link>
    </nav>
  )
}