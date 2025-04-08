import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
