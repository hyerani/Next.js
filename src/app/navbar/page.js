"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav>
      <Link
        href="/"
        className={`${pathname === "/" ? styles.active : ""} ${styles.link}`}
      >
        home
      </Link>
      <Link
        href="/about"
        className={[
          pathname === "/about" ? styles.active : "",
          styles.link,
        ].join(" ")}
      >
        about
      </Link>
    </nav>
  );
}
