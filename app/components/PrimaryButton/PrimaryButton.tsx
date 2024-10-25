"use client";
import styles from "./PrimaryButton.module.scss";

interface PrimaryButtonProps {
  text: string;
  mode: "large" | "small";
  clickHandler: () => void;
}
export function PrimaryButton({
  text,
  mode = "large",
  clickHandler,
}: PrimaryButtonProps) {
  return (
    <button
      className={`${styles.button} ${
        mode === "large" ? styles["button--large"] : styles["button--small"]
      }`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}
