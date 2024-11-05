"use client";

import { UrlProvider } from "@/app/context/UrlContext";
import { UrlInput } from "../UrlInput/UrlInput";
import { UrlList } from "../UrlList/UrlList";
import styles from "./UrlShortenerContainer.module.scss";
export function UrlShortenerContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <UrlProvider>
          <UrlInput />
          <UrlList />
        </UrlProvider>
      </div>
    </div>
  );
}
