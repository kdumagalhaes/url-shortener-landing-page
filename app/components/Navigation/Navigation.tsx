import Image from "next/image";
import Link from "next/link";

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
    <div>
      <Link href="/">
        <Image
          src="../../../images/logo.svg"
          alt="URL shortener logo"
          width={121}
          height={33}
        />
      </Link>
      <ul>
        {MENU_OPTIONS.map((option) => (
          <li key={option.slug}>
            <Link href={option.slug}>{option.title}</Link>{" "}
          </li>
        ))}
      </ul>
      <Link href="/login" />
    </div>
  );
}
