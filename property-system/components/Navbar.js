'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-gray-700 text-white p-6 items-center justify-around fixed top-0 w-full z-10">
      <div className="container mx-auto w-full">
        <ul className="flex text-xl">
          <li className="mr-6 font-bold text-2xl">
            <Link
              className={`link ${pathname === "/properties" ? "active" : ""}`}
              href="/properties"
            >
              Real Estate
            </Link>
          </li>
          <li className="mr-6">
            <Link className={`link ${pathname === "/properties" ? "active" : ""}`} href="/properties">Properties</Link>
          </li>
          <li className="mr-6">
            <Link className={`link ${pathname === "/tenants" ? "active" : ""}`} href="/tenants">Tenants</Link>
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
