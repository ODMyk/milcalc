import {DatabaseService} from '@services/database';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {CalibrationMilsInput} from 'src/types/Scenario';

export function useAddCalibrationMilsInput(scenarioId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['scenario', scenarioId],
    mutationFn: async (dto: CalibrationMilsInput) =>
      DatabaseService.addCalibrationMilsInput(scenarioId, dto),
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['scenario', scenarioId]});
    },
  });
}
