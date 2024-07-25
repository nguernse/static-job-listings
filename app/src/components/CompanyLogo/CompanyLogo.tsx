import { Job } from "@/types";

import styles from "./CompanyLogo.module.scss";
import clsx from "clsx";

type Props = {
  company: Job["company"];
  logo: Job["logo"];
  className?: string;
};

export default function CompanyLogo({ company, logo, className }: Props) {
  return (
    <div className={clsx(styles.CompanyLogo, className)}>
      <img src={logo} alt={company} />
    </div>
  );
}
