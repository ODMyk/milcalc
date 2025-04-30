import {DatabaseService} from '@services/database';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {AngleInput} from 'src/types/Scenario';

export function useAddAngleSecondaryInput(scenarioId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['scenario', scenarioId],
    mutationFn: async (dto: Omit<AngleInput, 'id'>) =>
      DatabaseService.addAngleSecondaryInput(scenarioId, dto),
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['scenario', scenarioId]});
    },
  });
}
