import {DatabaseService} from '@services/database';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {AngleInput} from 'src/types/Scenario';

export function useAddAnglePrimaryInput(scenarioId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['scenario', scenarioId],
    mutationFn: async (dto: Omit<AngleInput, 'id'>) =>
      DatabaseService.addAnglePrimaryInput(scenarioId, dto),
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['scenario', scenarioId]});
    },
  });
}
