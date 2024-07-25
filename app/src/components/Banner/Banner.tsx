import styles from "./Banner.module.scss";

export default function Banner() {
  return (
    <header className={styles.Banner}>
      <picture>
        <source
          src="./images/bg-header-mobile.svg"
          media="(max-width: 375px)"
        />
        <source
          src="./images/bg-header-desktop.svg"
          media="(min-width: 1440px)"
        />

        <img src="./images/bg-header-desktop.svg" alt="" />
      </picture>
    </header>
  );
}
