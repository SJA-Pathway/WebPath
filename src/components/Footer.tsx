import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Image
            src="/sjapathwaylogo.png"
            alt="SJA Pathway"
            width={36}
            height={36}
            quality={100}
            unoptimized
            style={{ mixBlendMode: "multiply", borderRadius: 6 }}
          />
          <span>Cairn</span>
          <p className="footer-tagline">
            Mark the way through web development. An open-source roadmap built
            stone by stone by the community.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Explore</h4>
            <Link href="/paths">All Paths</Link>
            <Link href="/paths/frontend">Frontend</Link>
            <Link href="/paths/backend">Backend</Link>
            <Link href="/paths/fullstack">Full Stack</Link>
          </div>
          <div className="footer-col">
            <h4>Community</h4>
            <Link href="/contribute">Contribute</Link>
            <a
              href="https://github.com/sja-thedude/WebPath"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Open Source by SJA Pathway</p>
      </div>
    </footer>
  );
}
