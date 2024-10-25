import Link from "next/link";
import styles from "./NavigationButton.module.scss";

interface NavigationButtonProps {
  href: string;
  text: string;
  mode: "small" | "large";
}
export function NavigationButton({
  href,
  text,
  mode = "large",
}: NavigationButtonProps) {
  console.log(styles.button);
  return (
    <Link
      className={`${styles.button} ${
        mode === "large" ? styles["button--large"] : styles["button--small"]
      }`}
      href={href}
    >
      {text}
    </Link>
  );
}
