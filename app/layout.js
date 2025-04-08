import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";

export const metadata = {
  title: "MentorLink - Empowering Mentors",
  description: "Create your online mentoring business.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTranstionOnChange
        >
          <Header />
          {/*Header*/}
          <main className="min-h-screen">{children}</main>
          {/*Footer*/}
          <footer className="py-8 border-t">
            <div className="container mx-auto px-4 text-center text-primary">
              <p>Made by Ramon Z.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
