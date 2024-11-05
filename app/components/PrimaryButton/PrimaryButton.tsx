"use client";
import styles from "./PrimaryButton.module.scss";

interface PrimaryButtonProps {
  text: string;
  mode: "large" | "small";
  clickHandler: () => void;
  disabled: boolean;
}
export function PrimaryButton({
  text,
  mode = "large",
  clickHandler,
  disabled = true,
}: PrimaryButtonProps) {
  return (
    <button
      className={`${styles.button} ${
        mode === "large" ? styles["button--large"] : styles["button--small"]
      }`}
      onClick={clickHandler}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
