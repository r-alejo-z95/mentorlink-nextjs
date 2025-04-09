import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import { UserMenu } from "./user-menu";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export function Header() {
  return (
    <nav className="mx-auto pl-2 pr-4 flex justify-between items-center shadow-md">
      <Link href={"/"} className="flex items-center">
        <Image
          src="/logo-orange.svg"
          alt="MentorLink logo"
          width="1920"
          height="910"
          className="w-30 py-1"
        />
      </Link>
      <div className="flex flex-row gap-4 items-center">
        <ThemeToggle />
        <Link href="/events?create=true">
          <Button>
            <PenBox size={18} />
            Create Event
          </Button>
        </Link>
        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard">
            <Button variant="outline">Login</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserMenu />
        </SignedIn>
      </div>
    </nav>
  );
}
