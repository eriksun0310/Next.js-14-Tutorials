import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Next.js Tutorial - Test",
    template: "%s | Test",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header
          style={{
            background: "lightblue",
            padding: "1rem",
          }}
        >
          <p>Header</p>
        </header>
        {children}

        <footer
          style={{
            background: "lightpink",
            padding: "1rem",
          }}
        >
          <p>footer</p>
        </footer>
      </body>
    </html>
  );
}
