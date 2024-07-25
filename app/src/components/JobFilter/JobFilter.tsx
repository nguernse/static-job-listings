import Card from "../Card/Card";

import styles from "./JobFilter.module.scss";

type Props = {
  filters: string[];
  onClear: () => void;
  onRemoveFilter: (filter: string) => void;
};

export default function JobFilter({ filters, onClear, onRemoveFilter }: Props) {
  if (filters.length === 0) return null;

  return (
    <Card className={styles.JobFilterBar} data-testid="job-filter-bar">
      <div className={styles.JobFilters}>
        {filters.map((filter) => (
          <div className={styles.JobFilterTag} key={filter}>
            <span>{filter}</span>

            <button
              onClick={() => onRemoveFilter(filter)}
              data-testid="remove-filter-button"
            >
              <img
                src="./images/icon-remove.svg"
                alt="X"
                width="25"
                height="25"
              />
            </button>
          </div>
        ))}
      </div>

      <button className={styles.JobClear} onClick={onClear}>
        Clear
      </button>
    </Card>
  );
}
