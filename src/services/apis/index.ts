import axios from 'axios';

export const getCommitRanks = () => {
  return axios.get('/api/commit/ranks').then((res) => res);
};
