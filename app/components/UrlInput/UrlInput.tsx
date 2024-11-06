"use client";

import { useState } from "react";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { shortenUrl } from "@/app/actions/shortenUrl";
import { useUrl } from "@/app/context/UrlContext";
import styles from "./UrlInput.module.scss";
export function UrlInput() {
  const { getUrl } = useUrl();
  const [url, setUrl] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const validateUrl = () => {
    if (!url) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  const handleClick = async () => {
    validateUrl();
    const { result_url } = await shortenUrl(url);
    if (result_url) getUrl(url, result_url);
    console.log("result_url = ", result_url);
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
      <PrimaryButton
        clickHandler={handleClick}
        text="Shorten It"
        mode="large"
        disabled={isEmpty}
      />
    </div>
  );
}
