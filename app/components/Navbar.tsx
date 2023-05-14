import Link from "next/link";
import React from "react";
import Search from "./Search";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 border-b-2 border-white/40 justify-around">
      <Link href="/">
        <p className="btn btn-ghost normal-case text-xl">
          Rick & Morty NextJs 13.4 Demo
        </p>
      </Link>
      <Search/>
    </div>
  );
}
