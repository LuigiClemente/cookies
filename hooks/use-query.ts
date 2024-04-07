import { useMemo } from 'react';
import { useRouter } from 'next/router';

export default function useQuery() {
  const router = useRouter();
  const { query } = router;

  return useMemo(() => query, [query]);
}
