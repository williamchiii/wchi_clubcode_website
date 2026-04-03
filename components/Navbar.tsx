"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
];

const teamLinks = [
  { href: "/teams", label: "All Teams" },
];

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 border-b border-base-300 px-4">
      {/* Mobile hamburger */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <li>
              <details>
                <summary>Team</summary>
                <ul className="p-2">
                  {teamLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl gap-2">
          <Image
            src="/ClubCodeLogo.png"
            alt="Club C.O.D.E. Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          Club C.O.D.E.
        </Link>
      </div>

      {/* Desktop menu */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
          <li>
            <details>
              <summary>Team</summary>
              <ul className="bg-base-200 rounded-box z-10 p-2 w-48">
                {teamLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
