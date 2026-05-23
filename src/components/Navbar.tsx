"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">

        <Link href="/" className="navbar-brand">
          <Image
            src="/sjapathwaylogo.png"
            alt="SJA Pathway"
            width={40}
            height={40}
            quality={100}
            unoptimized
            style={{
              borderRadius: 6,
              backgroundColor: "white",
              padding: "2px",
            }}
          />

          <span className="brand-text">WebPath</span>
        </Link>

        <div className="navbar-links">

          <Link href="/paths">Paths</Link>

          <Link href="/contribute">Contribute</Link>

          <a
            href="https://github.com/sja-thedude/WebPath"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <button
            className="nav-link"
            onClick={() => {
              document.documentElement.classList.toggle("dark");

              localStorage.theme =
                document.documentElement.classList.contains("dark")
                  ? "dark"
                  : "light";
            }}
            aria-label="Toggle Dark Mode"
          >
            🌙
          </button>

        </div>
      </div>
    </nav>
  );
}