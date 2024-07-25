import { HTMLAttributes } from "react";

import styles from "./Card.module.scss";
import clsx from "clsx";

type Props = HTMLAttributes<HTMLDivElement> & {
  active?: boolean;
  className?: string;
};

export default function Card({
  active = false,
  children,
  className,
  ...props
}: Props) {
  return (
    <div
      className={clsx(styles.Card, { [styles.active]: active }, className)}
      data-active={active}
      {...props}
    >
      {children}
    </div>
  );
}
