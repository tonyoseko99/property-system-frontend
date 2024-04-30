'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-gray-700 p-6 items-center justify-around">
      <div className="container mx-auto w-full">
        <ul className="flex text-xl">
          <li className="mr-6 font-bold text-2xl">
            <Link
              className={`link ${pathname === "/" ? "active" : ""}`}
              href="/"
            >
              Real Estate
            </Link>
          </li>
          <li className="mr-6">
            <Link className={`link ${pathname === "/properties" ? "active" : ""}`} href="/properties">Properties</Link>
          </li>
          <li className="mr-6">
            <Link className={`link ${pathname === "/about" ? "active" : ""}`} href="/about">About</Link>
          </li>
          {/* Add more links for other pages */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
