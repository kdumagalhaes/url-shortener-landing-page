/* eslint-disable react/no-unescaped-entities */
import { NavigationButton } from "../NavigationButton/NavigationButton";
import styles from "./Hero.module.scss";
export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>More than just shorter links</h1>
        <h2 className={styles.subtitle}>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </h2>
        <NavigationButton href="/get-started" text="Get Started" mode="large" />
      </div>
    </section>
  );
}
