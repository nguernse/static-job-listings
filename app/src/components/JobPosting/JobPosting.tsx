import { Job } from "@/types";
import Card from "../Card/Card";
import CompanyLogo from "../CompanyLogo/CompanyLogo";

import styles from "./JobPosting.module.scss";
import Badge from "../Badge/Badge";
import { useMemo } from "react";

type Props = {
  job: Job;
  onFilter: (filter: string) => void;
};

export default function JobPosting({ job, onFilter }: Props) {
  const jobFilterTags = useMemo(() => {
    // flatten the job filter tags
    return [job.role, job.level, ...job.languages, ...job.tools];
  }, [job]);

  return (
    <Card
      data-testid="job-posting"
      active={job.featured}
      className={styles.JobPosting}
    >
      <div className={styles.JobPostingBody}>
        <CompanyLogo
          company={job.company}
          logo={job.logo}
          className={styles.JobLogo}
        />

        <div className={styles.JobDescription}>
          <div className={styles.DescriptionHeader}>
            <span className={styles.Company}>{job.company}</span>
            {job.new && <Badge>NEW!</Badge>}
            {job.featured && <Badge variant="dark">FEATURED</Badge>}
          </div>

          <div className={styles.DescriptionTitle}>{job.position}</div>

          <div className={styles.DescritionFooter}>
            <span>{job.postedAt}</span>
            <span>{job.contract}</span>
            <span>{job.location}</span>
          </div>
        </div>

        <div className={styles.JobFilterTags}>
          {jobFilterTags.map((tag) => (
            <button
              data-testid="job-filter-tag"
              key={tag}
              onClick={() => onFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
}
