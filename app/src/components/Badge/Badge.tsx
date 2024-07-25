import { PropsWithChildren } from "react";

import styles from "./Badge.module.scss";
import clsx from "clsx";

type Props = PropsWithChildren<{
  variant?: "primary" | "dark";
}>;

export default function Badge({ variant = "primary", children }: Props) {
  return (
    <span
      className={clsx(styles.Badge, {
        [styles.primary]: variant === "primary",
        [styles.dark]: variant === "dark",
      })}
    >
      {children}
    </span>
  );
}
