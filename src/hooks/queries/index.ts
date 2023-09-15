import { useQuery } from 'react-query';

import { getCommitRanks } from '@/services/apis';

export function useGetCommitRanks() {
  return useQuery({ queryKey: ['ranks'], queryFn: () => getCommitRanks() });
}
