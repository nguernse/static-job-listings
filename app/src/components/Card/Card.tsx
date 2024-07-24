import { PropsWithChildren } from "react";

import styles from "./Card.module.scss";
import clsx from "clsx";

type Props = PropsWithChildren<{
  active?: boolean;
}>;

export default function Card({ active = false, children }: Props) {
  return (
    <div
      className={clsx(styles.Card, { [styles.active]: active })}
      data-active={active}
    >
      {children}
    </div>
  );
}
