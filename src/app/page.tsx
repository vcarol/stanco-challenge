import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  items-center h-full m-auto max-w-screen-md px-4">
      <ul className="w-full flex justify-around items-center gap-4 md:gap-8">
        <li className="flex h-64 w-full text-lg md:text-xl items-center justify-center bg-slate-800 text-white">
          <Link href="/movies" className="hover:underline">
            Movies
          </Link>
        </li>
        <li className="flex h-64 w-full text-lg md:text-xl items-center justify-center bg-slate-800 text-white">
          <Link href="/series" className="hover:underline">
            Series
          </Link>
        </li>
      </ul>
    </main>
  );
}
