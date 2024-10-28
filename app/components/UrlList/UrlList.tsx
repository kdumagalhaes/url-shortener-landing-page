"use client";

import { useRef } from "react";
import { CopyButton } from "../CopyButton/CopyButton";
import styles from "./UrlList.module.scss";

const MOCK_URL_RESULT = [
  {
    id: "1ab2c3",
    request_url: "https://google.com",
    result_url: "https://cleanuri.com/docs",
  },
  {
    id: "2bc3d4",
    request_url: "https://globo.com/",
    result_url: "https://portocanal.sapo.pt/",
  },
];

export function UrlList() {
  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
  };

  return (
    <ul className={styles.urlList}>
      {MOCK_URL_RESULT.map((result) => (
        <li className={styles.item} key={result.id}>
          <p className={styles.requestUrl}>{result.request_url}</p>
          <div className={styles.resultContainer}>
            <p className={styles.resultUrl}>{result.result_url}</p>
            <CopyButton clickHandler={() => handleCopy(result.result_url)} />
          </div>
        </li>
      ))}
    </ul>
  );
}
