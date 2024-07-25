import { filterJobs, initialState, jobsReducer } from "./jobsReducer";

describe('jobsReducer', () => {
  test('add filter', () => {
    const state = jobsReducer(initialState, { type: 'ADD_FILTER', payload: 'JavaScript' });

    expect(state.jobs).toHaveLength(8);
  });

  test('remove filter', () => {
    const state = jobsReducer({
      jobs: filterJobs(initialState.jobs, ['JavaScript']),
      filters: ['JavaScript']
    }, { type: 'REMOVE_FILTER', payload: 'JavaScript' });

    expect(state.filters).toEqual([]);
    expect(state.jobs).toHaveLength(initialState.jobs.length);
  });

  test('clear filters', () => {
    const state = jobsReducer({
      jobs: filterJobs(initialState.jobs, ['JavaScript']),
      filters: ['JavaScript']
    }, { type: 'CLEAR' });

    expect(state.filters).toEqual([]);
    expect(state.jobs).toHaveLength(initialState.jobs.length);
  });
})