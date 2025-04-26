import {DatabaseService} from '@services/database';
import {useQuery} from '@tanstack/react-query';

export function useScenariosList() {
  return useQuery({
    queryKey: ['scenarios'],
    queryFn: DatabaseService.getScenarios,
  });
}
