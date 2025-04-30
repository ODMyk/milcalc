import {DatabaseService} from '@services/database';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {CalibrationMetersInput} from 'src/types/Scenario';

export function useAddCalibrationMetersInput(scenarioId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['scenario', scenarioId],
    mutationFn: async (dto: CalibrationMetersInput) =>
      DatabaseService.addCalibrationMetersInput(scenarioId, dto),
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['scenario', scenarioId]});
    },
  });
}
