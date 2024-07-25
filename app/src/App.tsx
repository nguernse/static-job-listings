import Banner from "./components/Banner/Banner";

import styles from "./app.module.scss";
import JobPosting from "./components/JobPosting/JobPosting";
import { useReducer } from "react";
import { initialState, jobsReducer } from "./utils/jobsReducer";
import JobFilter from "./components/JobFilter/JobFilter";

function App() {
  const [state, dispatch] = useReducer(jobsReducer, initialState);

  return (
    <>
      <Banner />

      <main className={styles.Main} data-filter={state.filters.length > 0}>
        <JobFilter
          filters={state.filters}
          onClear={() => dispatch({ type: "CLEAR" })}
          onRemoveFilter={(filter) =>
            dispatch({ type: "REMOVE_FILTER", payload: filter })
          }
        />

        <section>
          <ul>
            {state.jobs.map((job) => (
              <li key={job.id}>
                <JobPosting
                  job={job}
                  onFilter={(filter) =>
                    dispatch({ type: "ADD_FILTER", payload: filter })
                  }
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
