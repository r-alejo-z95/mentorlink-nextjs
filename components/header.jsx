import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  return (
    <nav className="mx-auto pl-2 pr-4 flex justify-between items-center border-b">
      <Link href={"/"} className="flex items-center">
        <Image
          src="/logo-orange.svg"
          alt="MentorLink logo"
          width="1920"
          height="910"
          className="w-30 py-1"
        />
      </Link>
      <ThemeToggle />
    </nav>
  );
}
