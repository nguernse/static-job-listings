import { Job } from "@/types";
import data from "../assets/data.json";

type JobsState = {
  jobs: Job[];
  filters: string[];
}
type JobsAction =
  | { type: "CLEAR" }
  | { type: "REMOVE_FILTER", payload: string }
  | { type: "ADD_FILTER", payload: string };

export const initialState: JobsState = {
  jobs: data,
  filters: []
};

export function jobsReducer(state: JobsState, action: JobsAction): JobsState {
  switch (action.type) {
    case "ADD_FILTER": {
      const newFilters = [...new Set([...state.filters, action.payload])];

      return {
        jobs: filterJobs(data, newFilters),
        filters: newFilters
      };
    }
    case "REMOVE_FILTER": {
      const newFilters = state.filters.filter((f) => f !== action.payload);

      return {
        jobs: filterJobs(data, newFilters),
        filters: newFilters
      };
    }
    case "CLEAR": {
      return {
        jobs: data,
        filters: []
      }
    }
    default:
      return state;
  }
}

export function filterJobs(jobs: Job[], filters: string[]): Job[] {
  if (filters.length === 0) return jobs;

  return jobs.filter(({ role, level, languages, tools }) => {
    const items = new Set([role, level, ...languages, ...tools]);

    return filters.every((filter) => items.has(filter));
  })
}