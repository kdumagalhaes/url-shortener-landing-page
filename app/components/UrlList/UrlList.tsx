"use client";

import { CopyButton } from "../CopyButton/CopyButton";
import { useUrl } from "@/app/context/UrlContext";
import styles from "./UrlList.module.scss";

export function UrlList() {
  const { url } = useUrl();

  const handleCopy = (url: string) => {
    if (url) navigator.clipboard.writeText(url);
  };

  return (
    <ul className={styles.urlList}>
      <li className={styles.item} key={url?.result}>
        <p className={styles.requestUrl}>{url?.request}</p>
        <div className={styles.resultContainer}>
          <p className={styles.resultUrl}>{url?.result}</p>
          {url?.result && (
            <CopyButton
              clickHandler={() => handleCopy(url?.result)}
              isCopied={false}
            />
          )}
        </div>
      </li>
    </ul>
  );
}
