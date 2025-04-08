import "./globals.css";

export const metadata = {
  title: "MentorLink - Empowering Mentors",
  description: "Create your online mentoring business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  );
}
