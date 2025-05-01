import {DatabaseService} from '@services/database';
import {UpdateScenarioDto} from '@services/database/updateScenario';
import {useMutation, useQueryClient} from '@tanstack/react-query';

export function useUpdateScenario(scenarioId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['scenario', scenarioId],
    mutationFn: (dto: UpdateScenarioDto) =>
      DatabaseService.updateScenario(scenarioId, dto),
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['scenario', scenarioId]});
      queryClient.invalidateQueries({queryKey: ['scenarios']});
    },
  });
}
