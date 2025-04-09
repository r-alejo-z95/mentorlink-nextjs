import { Button } from "@/components/ui/button";
import Link from "next/link";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="py-8">
      <div className="min-w-full flex flex-col items-center justify-center px-4 text-primary ">
        <Link href="https://github.com/r-alejo-z95">
          <Button variant="link" className="text-sm font-normal">
            Made by Ramon Z.
          </Button>
        </Link>
        <p className="text-sm font-normal">© {currentYear}</p>
      </div>
    </footer>
  );
}
