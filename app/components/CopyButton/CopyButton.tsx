import styles from "./CopyButton.module.scss";
interface CopyButton {
  clickHandler: () => void;
  isCopied: boolean;
}
export function CopyButton({ clickHandler, isCopied }: CopyButton) {
  return (
    <button
      className={`${styles.copyButton} ${
        isCopied && styles["copyButton--copied"]
      }`}
      onClick={clickHandler}
    >
      {isCopied ? "Copied!" : "Copy"}
    </button>
  );
}
