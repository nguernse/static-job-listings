import styles from "./Banner.module.scss";
// import mobileImage from "../../assets/images/bg-header-mobile.svg";
// import desktopImage from "../../assets/images/bg-header-desktop.svg";

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
