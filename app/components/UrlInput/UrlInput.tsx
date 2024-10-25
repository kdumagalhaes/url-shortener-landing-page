import styles from "./UrlInput.module.scss";
export function UrlInput() {
  return (
    <div className={styles.urlInput}>
      <input
        placeholder="Shorten a link here..."
        autoFocus
        className={styles.input}
        type="text"
      />
      <button>Shorten It!</button>
    </div>
  );
}
