import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata = {
  title: "MentorLink - Empowering Mentors",
  description: "Create your online mentoring business.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClerkProvider>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTranstionOnChange
          >
            <Header />

            <main className="min-h-screen shadow-md">{children}</main>

            <Footer />
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
