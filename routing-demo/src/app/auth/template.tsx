"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/auth/register" },
  { name: "Login", href: "/auth/login" },
  { name: "Forgot Password", href: "/auth/forgotPassword" },
];
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const [input, setInput] = useState("");
  return (
    <>
      {children}

      <div>
        <input className="border-2 border-slate-600" value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <div>
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <div key={link.name}>
              <Link
                href={link.href}
                key={link.name}
                className={
                  isActive
                    ? "font-bold mr-4 text-green-400"
                    : "text-blue-500 mr-4"
                }
              >
                {link.name}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
