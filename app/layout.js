import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "MentorLink - Empowering Mentors",
  description: "Create your online mentoring business.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTranstionOnChange
          >
            <Header />

            <main className="min-h-screen shadow-md">{children}</main>

            <footer className="py-8">
              <div className="container mx-auto px-4 text-center text-primary">
                <Link href="https://github.com/r-alejo-z95">
                  <Button variant="link">Made by Ramon Z.</Button>
                </Link>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
