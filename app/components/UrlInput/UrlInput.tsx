"use client";

import { useState } from "react";
import styles from "./UrlInput.module.scss";
export function UrlInput() {
  const [url, setUrl] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const validateUrl = () => {
    if (!url) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  return (
    <div className={styles.urlInput}>
      <div className={styles.inputContainer}>
        <input
          placeholder="Shorten a link here..."
          autoFocus
          className={`${styles.input} ${isEmpty && styles["input--warning"]}`}
          type="text"
          onChange={(e) => setUrl(e.target.value)}
        />
        {isEmpty && <p className={styles.warningMessage}>Please add a link</p>}
      </div>
      <button onClick={validateUrl}>Shorten It!</button>
    </div>
  );
}
