import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Challenge | StanCo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grid min-h-screen grid-rows-[60px,1fr,120px]">
        <header className="py-4 bg-blue-400">
          <div className="flex items-center justify-between px-4 max-w-screen-md m-auto">
            <h1 className="text-base md:text-2xl font-semibold">
              <Link href="/">DEMO Streaming</Link>
            </h1>
            <nav className="flex items-center gap-2 md:gap-4 text-xs md:text-base">
              <span className="text-center">Log in</span>
              <button
                className="bg-slate-800 px-2 md:px-4 py-2 md:py-1 text-white"
                type="button"
              >
                Start your free trial
              </button>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="py-4 bg-slate-800 text-white">
          <ul className="m-auto text-xs md:text-base h-full max-w-screen-md px-4 flex flex-wrap items-center justify-center gap-2">
            <li>Home</li>
            {"|"}
            <li>Terms and Conditions</li>
            {"|"}
            <li>Privacy Policy</li>
            {"|"}
            <li>Collection Statement</li>
            {"|"}
            <li>Help</li>
            {"|"}
            <li>Manage Account</li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
