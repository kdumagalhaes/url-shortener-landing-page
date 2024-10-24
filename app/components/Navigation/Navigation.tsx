import Image from "next/image";
import Link from "next/link";
import styles from "./Navigation.module.scss";

export function Navigation() {
  const MENU_OPTIONS = [
    {
      title: "Features",
      slug: "features",
    },
    {
      title: "Pricing",
      slug: "pricing",
    },
    {
      title: "Resources",
      slug: "resources",
    },
  ];

  return (
    <div className={styles.navigation}>
      <Link href="/" className={styles.logo}>
        <Image
          src="../../../images/logo.svg"
          alt="URL shortener logo"
          width={121}
          height={33}
        />
      </Link>
      <ul className={styles.list}>
        {MENU_OPTIONS.map((option) => (
          <li key={option.slug}>
            <Link className={styles.item} href={option.slug}>
              {option.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.register}>
        <Link className={styles.login} href="/login">
          Login
        </Link>
        <Link href="/sign-up">Sign Up</Link>
      </div>
    </div>
  );
}
