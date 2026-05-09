"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const GITHUB_PATH = [
  "M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69",
  "2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127",
  "-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17",
  "-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052",
  "4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6",
  "-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2",
  "-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052",
  "a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63",
  "9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038",
  "3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283",
  "1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526",
  "0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691",
  "C97.707 22 75.788 0 48.854 0z",
].join(" ");

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 98 96" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d={GITHUB_PATH} />
    </svg>
  );
}

function PathsIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function ContributeIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-inner">

          <Link href="/" className="navbar-brand" onClick={() => setMenuOpen(false)}>
            <div className="brand-logo-wrap">
              <Image
                src="/sjapathwaylogo.png"
                alt="WebPath"
                width={34}
                height={34}
                quality={100}
                unoptimized
                style={{ borderRadius: 8, display: "block" }}
              />
            </div>
            <div className="brand-text-wrap">
              <span className="brand-text">
                Web<span className="brand-accent">Path</span>
              </span>
              <span className="brand-tagline">by SJA</span>
            </div>
          </Link>

          <div className="navbar-links desktop-links">
            <Link href="/paths" className="nav-link">
              <PathsIcon />
              Paths
            </Link>

            <Link href="/contribute" className="nav-link contribute-btn">
              <ContributeIcon />
              Contribute
            </Link>

            <a
              href="https://github.com/sja-thedude/WebPath"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link github-btn"
            >
              <GithubIcon />
              GitHub
            </a>
          </div>

          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link
          href="/paths"
          className="mobile-link"
          onClick={() => setMenuOpen(false)}
        >
          <PathsIcon />
          Paths
        </Link>

        <Link
          href="/contribute"
          className="mobile-link mobile-contribute"
          onClick={() => setMenuOpen(false)}
        >
          <ContributeIcon />
          Contribute
        </Link>

        <a
          href="https://github.com/sja-thedude/WebPath"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-link mobile-github"
          onClick={() => setMenuOpen(false)}
        >
          <GithubIcon />
          GitHub
        </a>
      </div>

      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}